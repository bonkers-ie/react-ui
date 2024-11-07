import React from 'react';
import colors from '../../_styles/_colors.json';
import getCssVariableValue from '../../_utils/getCssVariableValue';

const ColorList = () => {
  return (
    <div>
      <h2 className="font-bold">
        Base colors:
      </h2>
      <ul className="colors grid gap-md">
        {Object.entries(colors).map(([key, value]) => (
          <li
            key={key}
            className={`grid ${typeof value === 'object' ? 'grid_inner' : ''}`}
          >
            {typeof value === 'object' ? (
              <>
                <div>
                  <h2 className="font-bold">
                    {key}:
                  </h2>

                  <ul className="colors grid gap-md">
                    {Object.entries(value).map(([key2, value2]) => (
                      <li
                        key={key2}
                        className="grid"
                      >
                        <span
                          className="relative block size-xxxxxl rounded-full"
                          style={{ backgroundColor: value2 }}
                        />
                        <b style={{ margin: '15px 0', display: 'block' }}>
                          {key2}
                        </b>
                        <p>
                          ({getCssVariableValue(value2)})
                        </p>
                        <p>
                          {value2};
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <span
                  className="relative block size-xxxxxl rounded-full"
                  style={{ backgroundColor: value }}
                />
                <b style={{ margin: '15px 0', display: 'block' }}>
                  {key}
                </b>
                <p>
                  ({getCssVariableValue(value)})
                </p>
                <p>
                  {value};
                </p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;