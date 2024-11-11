import React from 'react';
import { EColors } from '../../_types/colors';

export const UiColors = () => {
  return (
    <div>
      colors
      <ColorList />
    </div>
  );
};

interface UiColorsProps {
  color: EColors;
  title: string;
  value: string;
  description?: string;
}
const ColorItem: React.FC<UiColorsProps> = ({ title, value, color }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{value}</p>
      <div style={{ backgroundColor: color, width: '50px', height: '50px' }}></div>
    </div>
  );
};

const ColorList: React.FC = () => {
  return (
    <div>
      {Object.entries(EColors).map(([title, color]) => (
        <ColorItem key={title} title={title} value={color} color={color} />
      ))}
    </div>
  );
};