import { useEffect, useState } from 'react';
import BackGroundImage from '../../Home/BackgroundAnimated./BackgroundImage';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../Navbar/Navbar';

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

const DetailedItem = ({ books }) => {
  let params = useParams();
  const detailedBook = getBookDetails(parseInt(params.id, 10), books.results);

  return (
    <StyledContainer>
      <NavBar />

      <StyledBookDisplay>
        <BackGroundImage />
        <h1>{detailedBook.title}</h1>
        <BackGroundImage />
      </StyledBookDisplay>
    </StyledContainer>
  );
};

const getBookDetails = (id, items) => items.find(item => item.id === id);

export default DetailedItem;
