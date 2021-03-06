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
  left: 30%;
  position: absolute;
  top: 22%;
  transform: translate(-50%, -50%);
  width: 90vmin;
`;

const TextTop = styled.div`
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 65%;
  border-bottom: 1vmin solid #000;
  top: 0;
`;

const Wrapper = styled.div`
  font-size: 6vmin;
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
  color: #f24f7d;
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
  font-size: 8vmin;
  padding: 2vmin 0;
  position: absolute;
  animation: ${showBottomText} 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
`;

const FantasySpan = styled.span`
  color: #b63e47;
`;

const AnimatedTitle = () => {
  return (
    <AnimatedContainer>
      <TextTop>
        <Wrapper>
          <AnimatedSpanFirst>Welcome</AnimatedSpanFirst>
          <AnimatedSpanSecond>
            To The <FantasySpan>Fantasy</FantasySpan>{' '}
          </AnimatedSpanSecond>
        </Wrapper>
      </TextTop>
      <TextBottom>
        <BottomTextDiv>Bookstore</BottomTextDiv>
      </TextBottom>
    </AnimatedContainer>
  );
};

export default AnimatedTitle;
