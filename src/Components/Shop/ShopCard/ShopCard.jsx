import styled from 'styled-components';

const StyledCardContainer = styled.div`
  margin-top: 20px;
  margin-left: 22px;
  display: flex;
  flex-direction: column;
`;

const StyledCardImage = styled.div`
  height: 20vh;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-self: center;
`;
const StyledTitle = styled.p`
  padding: 0;
  margin: 0;
`;

const ShopCard = ({ title, image }) => {
  return (
    <StyledCardContainer>
      <StyledCardImage image={image} />
      <StyledTitle>{title}</StyledTitle>
    </StyledCardContainer>
  );
};

export default ShopCard;
