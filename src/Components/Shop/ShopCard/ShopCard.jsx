import styled from 'styled-components';

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-rows: 60% 10% 30%;
`;

const StyledCardImage = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-self: center;
`;

const ShopCard = ({ title, author, image }) => {
  return (
    <StyledCardContainer>
      <StyledCardImage image={image} />
    </StyledCardContainer>
  );
};

export default ShopCard;
