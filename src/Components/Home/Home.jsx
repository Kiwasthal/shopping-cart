import AnimatedTitle from './AnimatedTitle';
import backgroundImg from '../../Assets/homeBackground.jpg';
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import { useState } from 'react';

const fade = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }

`;

const HomeContainer = styled.div`
  width: 100%;
  grid-template-columns: 7% 1fr 7%;
  height: 100vh;
  display: grid;
  overflow: hidden;
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

const MainDisplay = styled.div`
  border: 3px solid black;
  grid-area: 1 / 2 / 2 / 3;
  z-index: 1000;
`;

const Home = () => {
  return (
    <HomeContainer>
      <AnimatedTitle />
      <ImageContainer />
      <MainDisplay />
      <ImageContainer />
    </HomeContainer>
  );
};

export default Home;
