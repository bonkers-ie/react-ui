import React from "react";
import cx from "classnames";
import { ESkeletonKind } from "./_types";

type UiSkeletonProps ={
	kind: ESkeletonKind

}

export const UiSkeleton: React.FC<UiSkeletonProps> = ({
	kind
}) => {

	const widthClasses = ["w-1/2", "w-1/3", "w-2/3", "w-3/4"];

	return (
		<>
			{ kind === ESkeletonKind.RESULT_CARD && (
				<div
					className={ cx(
						"ui-skeleton-card",
						"animate-pulse",
						"rounded-2xl",
						"border-2",
						"border-secondary-alt-300",
						"p-xxs"
					) }
				>
					<div
						className={ cx(
							"ui-skeleton-card__header",
							"flex",
							"items-center",
							"gap-xs",
							"rounded-xl",
							"bg-secondary-alt-200",
							"p-xxs"
						) }
					>
						<div className={ cx("grid", "grow", "gap-xxs") }>
							<div
								className={ cx(
									"ui-skeleton-card__content__text",
									"h-md",
									"rounded-md",
									"bg-secondary-alt-300"
								) }
							/>
							<div
								className={ cx(
									"ui-skeleton-card__content__text",
									"h-md",
									"w-5/6",
									"rounded-md",
									"bg-secondary-alt-300"
								) }
							/>
						</div>
						<div
							className={ cx(
								"ui-skeleton-card__header__image",
								"size-xxxl",
								"rounded-lg",
								"bg-secondary-alt-300"
							) }
						/>
					</div>
					<div
						className={ cx(
							"ui-skeleton-card__content",
							"flex",
							"flex-col",
							"items-start",
							"justify-start",
							"rounded-xl",
							"pt-sm"
						) }
					>
						{ widthClasses.map((widthClass, index) => (
							<div
								key={ index }
								className={ cx(
									"ui-skeleton-card__content__text",
									"mb-xxs",
									"h-md",
									"rounded-md",
									"bg-secondary-alt-300",
									widthClass
								) }
							/>
						)) }
					</div>
					<div
						className={ cx(
							"ui-skeleton-card__footer",
							"flex",
							"flex-row",
							"justify-between"
						) }
					>
						<div
							className={ cx(
								"ui-skeleton-card__footer__text",
								"h-md",
								"w-1/4",
								"self-end",
								"rounded-xl",
								"bg-secondary-alt-300"
							) }
						/>
						<div
							className={ cx(
								"ui-skeleton-card__footer__text",
								"h-xl",
								"w-1/4",
								"rounded-xl",
								"bg-secondary-alt-300"
							) }
						/>
					</div>
					<div
						className={ cx(
							"ui-skeleton-card__button",
							"mt-xxs",
							"flex",
							"h-md",
							"w-full",
							"items-center",
							"justify-center",
							"rounded-xl",
							"bg-secondary-alt-300",
							"py-md"
						) }
					/>
				</div>
			) }

			{ kind === ESkeletonKind.FILTER_MENU && (
				<div
					className={ cx(
						"ui-skeleton-card__header",
						"flex",
						"items-center",
						"gap-xs",
						"rounded-xl",
						"p-xxs"
					) }
				>
					<div className="grow">
						<div
							className={ cx(
								"ui-skeleton-card__content__text",
								"h-md",
								"w-3/6",
								"rounded-md",
								"bg-secondary-alt-300"
							) }
						/>
					</div>
					<div
						className={ cx(
							"ui-skeleton-card__header__image",
							"size-xxl",
							"rounded-lg",
							"bg-secondary-alt-300"
						) }
					/>
					<div
						className={ cx(
							"ui-skeleton-card__header__image",
							"size-xxl",
							"rounded-lg",
							"bg-secondary-alt-300"
						) }
					/>
				</div>
			) }
		</>
	);
};
