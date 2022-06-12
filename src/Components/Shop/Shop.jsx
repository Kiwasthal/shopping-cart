import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../Hooks/useBooks';
import LoadingAnimation from '../Home/LoadinAnimation/LoadingAnimation';

const StyledContainer = styled.div`
  min-height: 200vh;
  min-width: 100vw;
  display: grid;
  grid-template-rows: 10vh auto;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, 20rem);
  background-color: #fff;
  grid-auto-flow: dense;
  position: relative;
  overflow: hidden;
  overflow-x: hidden;
`;

const StyledNavBar = styled.nav`
  grid-area: 1/2 / 1 /2;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  height: 10vh;
  width: 100%;
  background-color: #b63e47;
`;

const BooksContainer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
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
            <div>{book.bookAuthor}</div>
          ))}
        </BooksContainer>
      </StyledContainer>
    );
  }
  return content;
};

export default Shop;
