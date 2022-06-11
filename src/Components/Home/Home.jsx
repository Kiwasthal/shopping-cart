import AnimatedTitle from './AnimatedTitle/AnimatedTitle';
import LoadingAnimation from './LoadinAnimation/LoadingAnimation';
import BookCard from './ManageBookCards/BookCards';
import backgroundImg from '../../Assets/homeBackground.jpg';
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../Hooks/useBooks';

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
  padding: 30px;
`;

const Home = ({ books, status }) => {
  const [homeBooks, setHomeBooks] = useState(books);
  let content = <LoadingAnimation />;
  useBooks(setHomeBooks, books);

  if (!status && homeBooks && homeBooks.length > 0) {
    content = (
      <HomeContainer>
        <ImageContainer />
        <MainDisplay>
          <AnimatedTitle />
          <StyledLinkContainer>
            <Link to={'/shop'}>Shop</Link>
          </StyledLinkContainer>
          <InformationModal />
          <CardDisplay>
            <CardDisplayHeader>SUGGESTIONS</CardDisplayHeader>
            <CardContainer>
              {/*slicing and a random point to display some books for the homepage */}
              {homeBooks.slice(11, 16).map(book => (
                <BookCard
                  image={book.booksUrl}
                  title={book.bookTitle}
                  author={book.bookAuthor}
                />
              ))}
            </CardContainer>
          </CardDisplay>
        </MainDisplay>
        <ImageContainer />
      </HomeContainer>
    );
  }

  return content;
};

export default Home;
