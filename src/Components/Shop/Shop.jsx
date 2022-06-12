import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../Hooks/useBooks';
import LoadingAnimation from '../Home/LoadinAnimation/LoadingAnimation';
import ShopCard from './ShopCard/ShopCard';

const StyledContainer = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-rows: 10vh 1fr;
`;

const StyledNavBar = styled.nav`
  grid-area: 2/ 1 / 3 /2;
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 1001;
  top: 0;
  height: 10vh;
  width: 100%;
  background-color: #b63e47;
`;

const BooksContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, 20rem);
  grid-area: 2 / 1 / 3 / 2;
  grid-auto-flow: dense;
  position: relative;
  overflow: hidden;
  overflow-x: hidden;
  & > * {
    align-items: flex-start;
    background: #eee;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const Shop = ({ books, status }) => {
  const [ShopBooks, setShopBooks] = useState(books);
  let content = <LoadingAnimation />;
  useBooks(setShopBooks, books);
  console.log(books);
  if (!status && ShopBooks && ShopBooks.length > 0) {
    content = (
      <StyledContainer>
        <StyledNavBar>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </StyledNavBar>
        <BooksContainer>
          {ShopBooks.map(book => (
            <ShopCard
              key={book.id}
              image={book.booksUrl}
              title={book.bookTitle}
              author={book.bookAuthor}
            />
          ))}
        </BooksContainer>
      </StyledContainer>
    );
  }
  return content;
};

export default Shop;
