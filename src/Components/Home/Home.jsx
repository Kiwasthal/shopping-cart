import AnimatedTitle from './AnimatedTitle';
import backgroundImg from '../../Assets/homeBackground.jpg';
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

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
`;

const Home = ({ books, status }) => {
  const [homeBooks, setHomeBooks] = useState(books);
  let content = <h1>Loading...</h1>;

  useEffect(
    () =>
      setHomeBooks(
        books
          ? books.results.map(book => {
              let author;
              if (book.authors[0]) author = book.authors[0].name;
              else author = 'Uknown';

              return {
                bookTitle: book.title,
                bookAuthor: author,
                booksUrl: book.formats['image/jpeg'],
                bookShelves: book.bookshelves[0],
              };
            })
          : []
      ),
    [books]
  );
  console.log(homeBooks);

  if (!status && homeBooks && homeBooks.length > 0) {
    content = (
      <HomeContainer>
        <ImageContainer />
        <MainDisplay>
          <AnimatedTitle />
          {homeBooks.map(book => (
            <div>{book.bookAuthor}</div>
          ))}
        </MainDisplay>
        <ImageContainer />
      </HomeContainer>
    );
  }

  return content;
};

export default Home;
