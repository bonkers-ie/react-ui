
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
      <div className="flex flex-wrap justify-center">
        {Object.entries(colors).map(([title, color]) => {
          if (typeof color === 'object') {
            return (
              <div key={title} className="w-1/2 md:w-1/4 lg:w-1/6 p-4">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <div className="flex flex-wrap">
                  {Object.entries(color).map(([shade, colorValue]) => (
                    <div
                      key={shade}
                      className={`w-1/2 md:w-1/3 lg:w-1/4 p-4`}
                      style={{ backgroundColor: colorValue }}
                    >
                      {shade}
                    </div>
                  ))}
                </div>
              </div>
            );
          } else {
            return (
              <div key={title} className="w-1/2 md:w-1/4 lg:w-1/6 p-4">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <div
                  className={`p-4`}
                  style={{ backgroundColor: color }}
                >
                  {title}
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  };