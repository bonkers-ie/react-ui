
import React from "react";
import colors from "../../_styles/_colors.json";

export const UiColors = () => {
  const baseColors = Object.entries(colors).filter(([groupTitle, groupColors]) => typeof groupColors !== "object");
  const groupedColors = Object.entries(colors).filter(([groupTitle, groupColors]) => typeof groupColors === "object");

  return (
    <div>
      {baseColors.length > 0 && (
        <div className="mb-md">
          <h2 className="text-lg text-gray-900">Base Colors</h2>
          <div className="grid grid-cols-3 gap-md mb-md auto-cols-auto">
            {baseColors.map(([groupTitle, colorValue]) => (
              <div key={groupTitle} className="flex flex-col items-center">
                <div className="w-36 h-36 rounded-full" style={{ backgroundColor: typeof colorValue === 'string' ? colorValue : '', padding: "40px" }}>
                </div>
                <span className="text-md text-gray-900">{groupTitle}</span>
                <span className="text-xs text-gray-300">{typeof colorValue === 'string' ? colorValue : ''}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {groupedColors.map(([groupTitle, groupColors]) => (
        <div className="mt-md" key={groupTitle}>
          <h2 className="text-xl text-gray-900 mb-md">{groupTitle}</h2>
          <div className="grid grid-cols-3 gap-md">
            {Object.entries(groupColors).map(([shade, colorValue]) => (
              <div key={`${groupTitle}-${shade}`} className="flex flex-col items-center">
                <div className="w-36 h-36 rounded-full" style={{ backgroundColor: colorValue, padding: "40px" }}>
                </div>
                <span className="text-md text-gray-900">{shade}</span>
                <span className="text-xs text-gray-300">{colorValue}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
