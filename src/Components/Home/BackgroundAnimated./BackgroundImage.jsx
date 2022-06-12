import styled from 'styled-components';
import { keyframes } from 'styled-components';
import backgroundImg from '../../../Assets/homeBackground.jpg';

const fade = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }

`;

const ImageContainer = styled.div`
  background-image: url(${backgroundImg});
  height: 100vh;
  z-index: 999;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  opacity: 1;
  transition: all 500ms ease;
  animation: ${fade} 2s linear forwards;
`;

const BackGroundImage = () => {
  return <ImageContainer />;
};

export default BackGroundImage;
