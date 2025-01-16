const DIR_VARIABLE = `${process.cwd()}/dist`;
const VERSION_TO_UPDATE = "patch";
import { spawnSync } from "child_process";

const setVersionToJson = async (version: string) => {
	const packageFile = Bun.file(`${DIR_VARIABLE}/package.json`);
	const json = await packageFile.json();

	json.version = version.replace(/(\r\n|\n|\r)/gm, "");

	await Bun.write(
		`${DIR_VARIABLE}/package.json`,
		JSON.stringify(json, null, 4),
	);
};

async function run() {
	const NPM_AUTH_TOKEN = process.env.NPM_AUTH_TOKEN;
	if (!NPM_AUTH_TOKEN)
		throw new Error("Merge-release requires NPM_AUTH_TOKEN");
	Bun.spawnSync(["bun", "./postbuild.ts"]);

	const pkgFile = Bun.file(`${DIR_VARIABLE}/package.json`);
	const pkg = await pkgFile.json();

	const currentVersionProc = Bun.spawn(["npm", "view", pkg.name, "version"], {
		cwd: DIR_VARIABLE,
	});
	const currentVersion = await new Response(currentVersionProc.stdout).text();

	console.log(
		"currrent version:",
		currentVersion.replace(/(\r\n|\n|\r)/gm, ""),
	);
	await setVersionToJson(currentVersion);

	const newVersionProc = Bun.spawn(
		["npm", "version", "--no-git-tag-version", VERSION_TO_UPDATE],
		{
			cwd: DIR_VARIABLE,
		},
	);

	const newVersion = (
		await new Response(newVersionProc.stdout).text()
	).replace(/(\r\n|\n|\r)/gm, "");
	console.log("new version:", newVersion);

	await setVersionToJson(newVersion);

	try {
		const setAuthTokenProcess = spawnSync(
			"npm",
			["set", `//registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}`],
			{
				stdio: "inherit",
			},
		);
		if (setAuthTokenProcess.status !== 0) {
			throw new Error(
				`Failed to set npm authentication token: ${setAuthTokenProcess.stderr.toString()}`,
			);
		}

		const publishProcess = spawnSync(
			"npm",
			["publish", "--verbose", DIR_VARIABLE],
			{
				stdio: "inherit",
			},
		);
		if (publishProcess.status !== 0) {
			throw new Error(
				`Failed to publish package: ${publishProcess.stderr.toString()}`,
			);
		}

		const createTagProcess = spawnSync("git", ["tag", newVersion], {
			stdio: "inherit",
		});

		if (createTagProcess.status !== 0) {
			throw new Error(
				`Failed to create tag ${newVersion}: ${createTagProcess.stderr.toString()}`,
			);
		}

		// Push the new tag to the remote repository
		const pushTagProcess = spawnSync("git", ["push", "--tags"], {
			stdio: "inherit",
		});

		if (pushTagProcess.status !== 0) {
			throw new Error(
				`Failed to push tag ${newVersion} to the remote repository: ${pushTagProcess.stderr.toString()}`,
			);
		}

		console.log(
			`Tag ${newVersion} has been created and pushed successfully!`,
		);
	} catch (error) {
		console.error(error.message);
		process.exit(1); // Exit with non-zero code to indicate failure
	}
}

try {
	run();
} catch (e) {
	console.error(e, "<------=");
}
