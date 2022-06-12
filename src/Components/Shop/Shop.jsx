import styled from 'styled-components';
import { useState } from 'react';
import NavBar from './Navbar/Navbar';
import useBooks from '../Hooks/useBooks';
import LoadingAnimation from '../Home/LoadinAnimation/LoadingAnimation';
import ShopCard from './ShopCard/ShopCard';

const StyledContainer = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-rows: 10vh 1fr;
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

const Shop = ({ books, status, clickCart, cartOpacity, items, total }) => {
  const [ShopBooks, setShopBooks] = useState(books);
  let content = <LoadingAnimation />;
  useBooks(setShopBooks, books);
  if (!status && ShopBooks && ShopBooks.length > 0) {
    content = (
      <StyledContainer>
        <NavBar
          clickCart={clickCart}
          cartOpacity={cartOpacity}
          items={items}
          total={total}
        />
        <BooksContainer>
          {ShopBooks.map(book => (
            <ShopCard
              key={book.id}
              image={book.bookUrl}
              title={book.bookTitle}
              bookId={book.id}
              items={items}
            />
          ))}
        </BooksContainer>
      </StyledContainer>
    );
  }
  return content;
};

export default Shop;
