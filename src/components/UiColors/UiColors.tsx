
import React from "react";
import colors from '../../_styles/_colors.json';


type ColorsType = {
  [key: string]: string | { [key: string]: string };
};

const getColorValue = (colorName: string | number) => {
    console.log('colors:', colors);
    console.log('keys:', Object.keys(colors));
    console.log('colorName:', colorName);
    const colorValue = (colors as ColorsType)[colorName.toString().toLowerCase() as keyof ColorsType];
    console.log('colorValue:', colorValue);
    return `bg-${colorValue}`;
  }

const colorEntries = Object.entries(colors);

export const UiColors = () => {
    return (
        <div>
            colors
            {Object.entries(colors).map(([title, color]) => {
                let colorValue;
                if (typeof color === 'object') {
                    colorValue = Object.values(color)[0]; // get the first color value
                } else {
                    colorValue = color;
                }
                return (
                    <div key={title} className={`bg-${colorValue}`} style={{ backgroundColor: colorValue }}>
                        {title}
                    </div>
                );
            })}
        </div>
    );
};