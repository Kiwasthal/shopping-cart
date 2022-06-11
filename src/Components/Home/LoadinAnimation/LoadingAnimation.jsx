import { keyframes } from 'styled-components';
import styled from 'styled-components';

const Move = keyframes`
  from { background-position-x: 0 ; }
  
  to {
    background-position-x: 10px;
  }
`;

const Travel = keyframes`
  0% {
    opacity: 0;
    transform: translateX(300px) rotateZ(0deg) scaleY(1);
  }
  
  6.5% {
    transform: translateX(279.5px) rotateZ(0deg) scaleY(1.1);
  }
  
  8.8% {
    transform: translateX(273.6px) rotateZ(0deg) scaleY(1);
  }
  
  10% {
    opacity: 1;
    transform: translateX(270px) rotateZ(0deg);
  }
  
  17.6% {
    transform: translateX(247.2px) rotateZ(-30deg);
  }
  
  45% {
    transform: translateX(165px) rotateZ(-30deg);
  }
  
  49.5% {
    transform: translateX(151.5px) rotateZ(-45deg);
  }
  
  61.5% {
    transform: translateX(115.5px) rotateZ(-45deg);
  }
  
  67% {
    transform: translateX(99px) rotateZ(-60deg);
  }
  
  76% {
    transform: translateX(72px) rotateZ(-60deg);
  }
  
  83.5% {
    opacity: 1;
    transform: translateX(49.5px) rotateZ(-90deg);
  }
  
  90% {
    opacity: 0;
  }
  
  100% {
    opacity: 0;
    transform: translateX(0px) rotateZ(-90deg);
  }
   

`;

const BookShelfWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BookList = styled.ul`
  margin: 0 auto;
  width: 300px;
  padding: 0;
`;

const Book = styled.li`
  position: absolute;
  top: -120px;
  box-sizing: border-box;
  list-style: none;
  width: 40px;
  height: 120px;
  opacity: 0;
  background-color: #1e6cc7;
  border: 5px solid white;
  transform-origin: bottom left;
  transform: translateX(300px);
  animation: ${Travel} 2500ms linear infinite;
`;

const FirstBook = styled(Book)`
  top: -140px;
  height: 140px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: white;
  }
  &:after {
    top: initial;
    bottom: 10px;
  }
`;

const SecondBook = styled(Book)`
  animation-delay: 416ms;
  &:before,
  &:after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: calc(5px * 3.5px);
    border-top: 5px solid white;
    border-bottom: 5px solid white;
  }

  &:after {
    top: initial;
    bottom: 10px;
  }
`;

const ThirdBook = styled(Book)`
  animation-delay: 833ms;
  &:before,
  &:after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    top: 10px;
    left: 9px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 5px solid white;
  }

  &:after {
    top: initial;
    bottom: 10px;
  }
`;

const FourthBook = styled(Book)`
  animation-delay: 1248ms;
  top: -130px;
  height: 130px;

  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    top: 46px;
    left: 0;
    width: 100%;
    height: 20px;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
  }
`;

const FifthBook = styled(SecondBook)`
  animation-delay: 1664ms;
  top: -100px;
  height: 100px;
`;

const SixthBook = styled(Book)`
  animation-delay: 2080ms;
  top: -140px;
  height: 140px;

  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    bottom: 31px;
    left: 0px;
    width: 100%;
    height: $thickness;
    background-color: white;
  }

  &:after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    bottom: 10px;
    left: 9px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: $thickness solid white;
  }
`;

const Shelf = styled.div`
  width: 300px;
  height: 5px;
  margin: 0 auto;
  background-color: white;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: 0 -2.5px;
    background-size: 10px 10px;
    background: #1e6cc7;
    background-image: radial-gradient(
      rgba(255, 255, 255, 0.5) 30%,
      transparent 0
    );
    top: 200%;
    left: 5%;
    animation: ${Move} 250ms linear infinite;
  }

  &:after {
    top: 400%;
    left: 7.5%;
  }
`;

const LoadingAnimation = () => {
  return (
    <BookShelfWrapper>
      <BookList>
        <FirstBook />
        <SecondBook />
        <ThirdBook />
        <FourthBook />
        <FifthBook />
        <SixthBook />
      </BookList>
      <Shelf />
    </BookShelfWrapper>
  );
};

export default LoadingAnimation;
