import styled from 'styled-components';
import { keyframes } from 'styled-components';

const showTopText = keyframes`
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const showBottomText = keyframes`
   0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const AnimatedContainer = styled.div`
  color: #222;
  font-family: Roboto, Arial, sans-serif;
  height: 90vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vmin;
`;

const TextTop = styled.div`
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
  border-bottom: 1vmin solid #000;
  top: 0;
`;

const Wrapper = styled.div`
  font-size: 12vmin;
  padding: 2vmin 0;
  position: absolute;
  animation: ${showTopText} 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
`;

const AnimatedSpanFirst = styled.span`
  display: block;
  color: #767676;
`;

const AnimatedSpanSecond = styled.span`
  display: block;
`;

const TextBottom = styled.div`
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const BottomTextDiv = styled.div`
  font-size: 12vmin;
  padding: 2vmin 0;
  position: absolute;
  animation: ${showBottomText} 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
`;

const AnimatedTitle = () => {
  return (
    <AnimatedContainer>
      <TextTop>
        <Wrapper>
          <AnimatedSpanFirst>Welcome</AnimatedSpanFirst>
          <AnimatedSpanSecond>To The Fantasy</AnimatedSpanSecond>
        </Wrapper>
      </TextTop>
      <TextBottom>
        <BottomTextDiv>Bookstore</BottomTextDiv>
      </TextBottom>
    </AnimatedContainer>
  );
};

export default AnimatedTitle;
