import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../Navbar/Navbar';

const StyledContainer = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-rows: 10vh 1fr;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const DetailedItem = ({ books }) => {
  let params = useParams();
  const detailedBook = getBookDetails(parseInt(params.id, 10), books.results);

  return (
    <StyledContainer>
      <NavBar />
      <h1>{detailedBook.title}</h1>
    </StyledContainer>
  );
};

const getBookDetails = (id, items) => items.find(item => item.id === id);

export default DetailedItem;
