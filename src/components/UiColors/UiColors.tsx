
import React from "react";
import colors from '../../_styles/_colors.json';


const getColorValue = Object.assign(Object.create(null), ...Object.entries(colors).map(([key, value]) => ({ [key.toLowerCase()]: value }))) as { [key: string]: string };

const colorEntries = Object.entries(colors);

export const UiColors = () => {
  return (
    <div className="grid grid-cols-3 gap-md">
    {Object.entries(colors).map(([title, color]) => {
      if (typeof color === 'object') {
        return Object.entries(color).map(([shade, colorValue]) => (
          <div key={`${title}-${shade}`} className="flex flex-col items-center">
            <div className="w-36 h-36 rounded-full" style={{ backgroundColor: colorValue, padding: '40px' }}>
            </div>
            <span className="text-md text-gray-900">{title} {shade}</span>
            <span className="text-sm text-grey-500 text-center pt-8">{colorValue}</span>
          </div>
        ));
      } else {
        return (
          <div key={title} className="flex flex-col items-center">
            <div className="w-36 h-36 rounded-full" style={{ backgroundColor: color, padding: '40px' }}>
            </div>
            <span className="text-md text-gray-900">{title}</span>
            <span className="text-sm text-gray-500">{color}</span>
          </div>
        );
      }
    })}
  </div>
  );
};
