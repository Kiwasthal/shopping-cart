import AnimatedTitle from './AnimatedTitle/AnimatedTitle';
import LoadingAnimation from './LoadinAnimation/LoadingAnimation';
import BookCard from './ManageBookCards/BookCards';
import BackGroundImage from './BackgroundAnimated./BackgroundImage';
import linkImage from '../../Assets/book.png';
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../Hooks/useBooks';

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const HomeContainer = styled.div`
  width: 100%;
  grid-template-columns: 7% 1fr 7%;
  height: 100vh;
  display: grid;
  overflow: hidden;
`;

const MainDisplay = styled.div`
  border: 3px solid black;
  grid-area: 1 / 2 / 2 / 3;
  z-index: 1000;
  position: relative;
  display: grid;
  grid-template-rows: 40% 1fr 2fr;
  padding: 30px;
  gap: 20px;
`;

const InformationModal = styled.div`
  grid-area: 2/ 1 / 3 /2;
  height: 50%;
  align-self: flex-end;
  margin-bottom: 40px;
  background-color: red;
`;

const CardDisplay = styled.div`
  width: 80%;
  background-color: #d4d4d4;
  justify-self: center;
  display: grid;
  grid-template-rows: 10% 1fr;
  grid-area: 3/ 1 / 4 /2;
  border-radius: 20px;
  padding: 15px;
`;

const CardDisplayHeader = styled.h3`
  padding: 0;
  margin: 0;
  justify-self: center;
`;

const CardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 20%);
`;

const StyledLinkContainer = styled.div`
  justify-self: flex-end;
  display: flex;
  height: 50px;
  gap: 10px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-align: start;
  font-weight: 600;
  text-decoration: none;
  font-size: 30px;
  position: relative;
  transform: scale(1);
  transition: all 200ms ease-in;
  display: inline-block;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 20%;
    left: 0;
    background-color: #b63e47;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  :hover {
    transform: scale(1.1);
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  :hover + div {
    animation: ${Rotate} 1500ms linear infinite;
  }
`;

const StyledImage = styled.div`
  background-repeat: no-repeat;
  width: 40px;
  background: url(${linkImage});
  background-size: contain;
  background-repeat: no-repeat;
  :hover {
    animation: ${Rotate} 1500ms linear infinite;
  }
`;

const Home = ({ books, status }) => {
  const [homeBooks, setHomeBooks] = useState(books);
  let content = <LoadingAnimation />;
  useBooks(setHomeBooks, books);

  if (!status && homeBooks && homeBooks.length > 0) {
    content = (
      <HomeContainer>
        <BackGroundImage />
        <MainDisplay>
          <AnimatedTitle />
          <StyledLinkContainer>
            <StyledLink to={'/shop'}>Shop</StyledLink>
            <StyledImage />
          </StyledLinkContainer>
          <InformationModal />
          <CardDisplay>
            <CardDisplayHeader>SUGGESTIONS</CardDisplayHeader>
            <CardContainer>
              {/*slicing and a random point to display five books for the homepage */}
              {homeBooks.slice(11, 16).map(book => (
                <BookCard
                  image={book.bookUrl}
                  title={book.bookTitle}
                  key={book.id}
                />
              ))}
            </CardContainer>
          </CardDisplay>
        </MainDisplay>
        <BackGroundImage />
      </HomeContainer>
    );
  }

  return content;
};

export default Home;
