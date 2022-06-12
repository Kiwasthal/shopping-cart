import BackGroundImage from '../../Home/BackgroundAnimated./BackgroundImage';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useBooks from '../../Hooks/useBooks';
import styled from 'styled-components';
import NavBar from '../Navbar/Navbar';
import LoadingAnimation from '../../Home/LoadinAnimation/LoadingAnimation';

const StyledContainer = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-rows: 10vh 1fr;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const StyledBookDisplay = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: grid;
  grid-template-columns: 7% 1fr 7%;
  border: 1px solid black;
`;

const InformationContainer = styled.div`
  width: 90%;
  display: grid;
  justify-self: center;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr 2fr;
  padding: 20px;
`;

const ImageContainer = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  border: 3px solid black;
  justify-self: center;
`;

const BookDetails = styled.div``;

const DetailedItem = ({ books, status, clickCart, cartOpacity }) => {
  const [allBooks, setAllBooks] = useState(books);
  let content = <LoadingAnimation />;
  useBooks(setAllBooks, books);
  let params = useParams();

  if (!status && allBooks && allBooks.length > 0) {
    const detailedBook = getBookDetails(parseInt(params.id, 10), allBooks);
    content = (
      <StyledContainer>
        <NavBar clickCart={clickCart} cartOpacity={cartOpacity} />
        <StyledBookDisplay>
          <BackGroundImage />
          <InformationContainer>
            <ImageContainer src={detailedBook.bookUrl} />
            <h1>{detailedBook.bookTitle}</h1>
            <p>{detailedBook.bookPrice} €</p>
            <button>Add to Cart</button>
          </InformationContainer>
          <BackGroundImage />
        </StyledBookDisplay>
      </StyledContainer>
    );
  }

  return content;
};

const getBookDetails = (id, items) => items.find(item => item.id === id);

export default DetailedItem;
