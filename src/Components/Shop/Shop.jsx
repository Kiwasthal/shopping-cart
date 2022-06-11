import styled from 'styled-components';
import { useState } from 'react';
import useBooks from '../Hooks/useBooks';
import LoadingAnimation from '../Home/LoadinAnimation/LoadingAnimation';

const StyledContainer = styled.div`
  min-height: 200vh;
  min-width: 100vw;
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 10vh 1fr;
  background-color: grey;
  position: relative;
  overflow: hidden;
`;

const StyledNavBar = styled.nav`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  height: 10vh;
  width: 10vw;
  background-color: red;
  overflow-x: hidden;
`;

const Shop = ({ books, status }) => {
  const [ShopBooks, setShopBooks] = useState(books);
  let content = <LoadingAnimation />;
  useBooks(setShopBooks, books);
  if (!status && ShopBooks && ShopBooks.length > 0) {
    content = (
      <StyledContainer>
        <StyledNavBar />
      </StyledContainer>
    );
  }
  return content;
};

export default Shop;
