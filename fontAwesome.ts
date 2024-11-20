/* import the fontawesome core */
import { library, config, type IconDefinition } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons/faFaceSmile";

config.autoAddCss = false;

/* add icons to the library */
library
	.add(
		...[
			faFaceSmile,
		] as IconDefinition[]
	);
