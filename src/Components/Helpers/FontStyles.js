import { createGlobalStyle } from 'styled-components';
import HeavyHeaders from 'https://fonts.googleapis.com/css2?family=Fascinate&display=swap';

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Fascinate', cursive;
  src: url(${HeavyHeaders});
}
`;

export default FontStyles;
