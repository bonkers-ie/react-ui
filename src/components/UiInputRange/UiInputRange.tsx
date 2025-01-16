import React from "react";
import cx from "classnames";
import styles from "./UiInputRange.module.css";

export type TUiInputRangeProps = {
	value: number;
	min: string | number;
	max: string | number;
	step: string | number;
	onChangeHandler: (value: number) => void;
} & React.HTMLProps<HTMLInputElement>;

export const UiInputRange: React.FC<TUiInputRangeProps> = ({
	value,
	min,
	max,
	step,
	onChangeHandler,
	...rest
}) => {
	const track = React.useRef<HTMLInputElement>(null);
	const thumb = React.useRef<HTMLDivElement>(null);

	const [thumbPosition, setThumbPosition] = React.useState(0);
	const [trackWidth, setTrackWidth] = React.useState(0);

	React.useEffect(() => {
		if (!track.current || !thumb.current) return;

		const numValue = parseFloat(String(value));
		const numMin = parseFloat(String(min));
		const numMax = parseFloat(String(max));

		const percentage = ((numValue - numMin) / (numMax - numMin)) * 100;

		const thumbWidth = thumb.current.getBoundingClientRect().width;
		const trackWidth = track.current.clientWidth;
		const thumbWidthPercentage = (thumbWidth / trackWidth) * 100;
		const adjustedPercentage = percentage * (1 - thumbWidthPercentage / 100);

		setThumbPosition(Math.max(0, Math.min(100, adjustedPercentage)));
		setTrackWidth(Math.max(0, Math.min(100, adjustedPercentage + thumbWidthPercentage)));
	}, [min, max, value]);

	const handleOnChange = (newValue: number) => {
		if (newValue === value) return;
		const preciseValue = parseFloat(newValue.toFixed(10));
		onChangeHandler(preciseValue);
	};

	return (
		<div
			className={ cx(
				"relative box-content h-xl py-xxs",
				rest.disabled && "opacity-60 cursor-default pointer-events-none",
			) }
		>
			<input
				{ ...rest }
				ref={ track }
				className="absolute left-0 top-0 size-full cursor-pointer appearance-none bg-transparent"
				style={ {
					touchAction: "none",
				} }
				type="range"
				min={ min }
				max={ max }
				step={ step }
				value={ value }
				onChange={ (e) => handleOnChange(+e.target.value) }
				onTouchStart={ (e) => e.stopPropagation() }
				onTouchMove={ (e) => e.stopPropagation() }
			/>

			<div className="pointer-events-none absolute left-0 top-1/2 h-xxs w-full -translate-y-1/2 rounded bg-secondary-alt" />

			<div
				className="pointer-events-none absolute left-0 top-1/2 h-xxs -translate-y-1/2 rounded bg-primary"
				style={ {
					width: `${trackWidth}%`,
				} }
			/>

			<div
				className={ cx(
					styles.thumb,
					"pointer-events-none",
					"absolute",
					"box-content",
					"size-md",
					"-translate-y-1/2",
					"rounded-full",
					"bg-white",
					"border-primary",
				) }
				ref={ thumb }
				style={ {
					left: `${thumbPosition}%`,
				} }
			>
				<div className="absolute left-1/2 top-1/2 size-xxs -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
			</div>
		</div>
	);
};
