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
  grid-template-rows: 7vh 1fr;
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
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 2fr;
  padding: 20px;
`;

const ImageContainer = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  align-self: center;
  border: 3px solid black;
  justify-self: center;
`;

const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BookTitle = styled.p`
  display: flex;
  align-items: flex-end;
  height: 20%;
  font-size: 36px;
  font-style: italic;
  margin: 0;
`;

const BookAuthor = styled.p`
  height: 20%;
  font-size: 28px;
  font-style: italic;
  margin: 0;
`;

const AddToCartButton = styled.button`
  align-self: flex-start;
  justify-self: flex-start;
  width: 200px;
  background-color: #b63e47;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  height: 80px;
  border: 3px solid black;
  transition: all 200ms ease-in;
  &:hover {
    background-color: #fff;
    color: #b63e47;
    &:active {
      transform: translateY(10px) scale(1.1);
      border: 4px solid yellow;
    }
  }
`;

const BookInfo = styled.p`
  height: 20%;
  font-size: 28px;
  margin: 0;
`;

const SubjectHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailedItem = ({
  books,
  status,
  clickCart,
  items,
  cartOpacity,
  addItem,
  total,
}) => {
  const [allBooks, setAllBooks] = useState(books);

  let content = <LoadingAnimation />;
  useBooks(setAllBooks, books);
  let params = useParams();

  const cartHandler = () => {
    if (cartOpacity === 0) clickCart();
  };

  if (!status && allBooks && allBooks.length > 0) {
    const detailedBook = getBookDetails(parseInt(params.id, 10), allBooks);
    const clickHandler = () => {
      addItem({
        name: detailedBook.bookTitle,
        price: detailedBook.bookPrice,
        image: detailedBook.bookUrl,
        quantity: 1,
        id: detailedBook.id,
      });
      cartHandler();
    };
    content = (
      <StyledContainer>
        <NavBar
          clickCart={clickCart}
          cartOpacity={cartOpacity}
          items={items}
          total={total}
        />
        <StyledBookDisplay>
          <BackGroundImage />
          <InformationContainer>
            <ImageContainer src={detailedBook.bookUrl} />
            <BookDetails>
              <BookTitle>{detailedBook.bookTitle}</BookTitle>
              <BookAuthor>- {detailedBook.bookAuthor}</BookAuthor>
              <BookInfo>Price : {detailedBook.bookPrice}€ </BookInfo>
              <BookInfo>Genre : {detailedBook.bookShelves}</BookInfo>
              <BookInfo>Downloads : {detailedBook.bookDownloads}</BookInfo>
            </BookDetails>

            <SubjectHolder>
              {detailedBook.bookSubjects.map((subject, index) => (
                <p key={index}>{subject}</p>
              ))}
            </SubjectHolder>

            <AddToCartButton onClick={clickHandler}>
              ADD TO CART
            </AddToCartButton>
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
