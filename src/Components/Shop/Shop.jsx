import styled from 'styled-components';
import { useState } from 'react';
import useBooks from '../Hooks/useBooks';
import LoadingAnimation from '../Home/LoadinAnimation/LoadingAnimation';

const StyledContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  grid-template-columns: 20% 1fr;
  background-color: grey;
`;

const Shop = ({ books, status }) => {
  const [ShopBooks, setShopBooks] = useState(books);
  let content = <LoadingAnimation />;
  useBooks(setShopBooks, books);
  if (!status && ShopBooks && ShopBooks.length > 0) {
    content = <StyledContainer />;
  }
  return content;
};

export default Shop;
