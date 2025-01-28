import React from "react";
import cx from "classnames";
import { ESkeletonKind } from "./_types";

type UiSkeletonProps ={
	kind: ESkeletonKind

}

export const UiSkeleton: React.FC<UiSkeletonProps> = ({
	kind
}) => {

	return (
		<>
			{ kind === ESkeletonKind.RESULT_CARD && (
				<div
					className={ cx(
						"ui-skeleton-card",
						"animate-pulse",
						"border-2",
						"border-secondary-alt-300",
						"grid-cols-5",
						"grid",
						"rounded-2xl"
					) }
				>
					<div
						className={ cx(
							"ui-skeleton-card__content",
							"bg-secondary-alt-300",
							"gap-xs",
							"items-center",
							"justify-center",
							"p-md",
							"rounded-bl-xl",
							"rounded-tl-xl"

						) }
					>
						<div className={ cx("grid", "grow", "gap-xxs", "justify-items-center") }>
							<div
								className={ cx(
									"ui-skeleton-card__content",
									"bg-secondary-alt-400",
									"h-xl",
									"mb-sm",
									"rounded",
									"w-2/3"
								) }
							/>
							<div
								className={ cx(
									"ui-skeleton-card__content",
									"bg-secondary-alt-400",
									"h-xxxxl",
									"rounded-full",
									"w-3/5"
								) }
							/>
						</div>

					</div>
					<div
						className={ cx(
							"ui-skeleton-main__content",
							"bg-white",
							"col-span-3"
						) }>
						<div className={ cx(
							"grid",
							"p-sm"

						) }>
							<div
								className={ cx(
									"bg-secondary-alt-400",
									"h-md",
									"mb-xxs",
									"rounded",
									"w-3/5"
								) }
							/>

							<div className={ cx(
								"flex",
								"gap-sm",
								"mb-xxs"
							) }>
								{ ["w-2/5", "w-1/4"].map((widthClass, index) => {
									const bgClass = index === 0 ? "bg-secondary-alt-300" : "bg-secondary-alt-300";

									return (
										<div
											key={ index }
											className={ cx(widthClass, "h-md", bgClass, "rounded") }
										/>
									);
								}) }
							</div>

							<div className={ cx(
								"flex",
								"justify-between",

							) }>
								{ ["w-1/3", "w-1/4"].map((widthClass, index) => {
									const heightClass = "h-[20px]";
									const bgClass = index === 0 ? "bg-secondary-alt-400" : "bg-secondary-alt-300";

									return (
										<div
											key={ index }
											className={ cx(widthClass, heightClass, bgClass, "rounded", "mb-xxs") }
										/>
									);
								}) }
							</div>
						</div>

						<div className={ cx(
							"grid",
							"grid-cols-4",

						) } >
							{ Array.from({
								length: 4
							}).map((_, index)=> (
								<div key={ index } className={ cx(
									"border",
									"border-secondary-alt-300",
									"px-xs",
									"py-md"

								) } >
									<div className={ cx(
										"place-items-center"

									) }>
										{ ["w-2/3", "w-2/4"].map((widthClass, index) => {

											const heightClass = index === 1 ? "h-[23px]" : "h-[20px]";

											return (
												<div
													key={ index }
													className={ cx(
														"bg-secondary-alt-300",
														"mb-xxxs",
														"rounded",
														widthClass,
														heightClass
													) }
												/>
											);
										}) }
									</div>
								</div>
							)) }

						</div>

					</div>
					<div
						className={ cx(
							"ui-skeleton-cta-cell",
							"bg-secondary-alt-200",
							"flex-col",
							"flex",
							"items-center",
							"px-sm",
							"py-md",
							"rounded-br-xl",
							"rounded-tr-xl"

						) }>
						{ ["w-3/4", "w-1/2", "w-3/4", "w-4/5"].map((widthClass, index) => {

							const heightClass = index === 1 ? "h-lg" : "h-[20px]";
							const lastDivClass = index === 3 ? "h-xxl bg-secondary-alt-500 mt-md" : heightClass;

							return (
								<div
									key={ index }
									className={ cx(
										"ui-skeleton-cta-cell__content",
										"bg-secondary-alt-400",
										"flex-col",
										"flex",
										"h-[20px]",
										"mb-xxxs",
										"rounded",
										widthClass,
										heightClass,
										lastDivClass
									) }
								/>
							);
						}) }

					</div>

				</div>

			) }

		</>
	);
};
