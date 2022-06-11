import styled from 'styled-components';

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-rows: 80% 1fr;
  gap: 10px;
  justify-items: center;
`;

const BookImageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-self: center;
`;

const BookTitle = styled.h6`
  margin: 0;
  font-size: 16px;
  display: flex;
  text-align: center;
`;

const BookCard = ({ title, image }) => {
  return (
    <StyledCardContainer>
      <BookImageContainer image={image} />
      <BookTitle>{title}</BookTitle>
    </StyledCardContainer>
  );
};

export default BookCard;
