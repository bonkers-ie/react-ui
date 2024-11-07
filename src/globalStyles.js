import { createGlobalStyle } from 'styled-components';
import tailwindcss from 'tailwindcss';

const GlobalStyles = createGlobalStyle`
  ${tailwindcss.base}
  ${tailwindcss.components}
  ${tailwindcss.utilities}
`;

export default GlobalStyles;