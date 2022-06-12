import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCardContainer = styled.div`
  margin-top: 20px;
  gap: 20px;
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

const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  padding: 0;
  margin: 0;
  text-align: center;

  :hover {
    text-decoration: underline;
  }

  :visited {
    color: black;
    text-decoration: none;
  }
`;

const ShopCard = ({ title, image, bookId, items }) => {
  return (
    <StyledCardContainer>
      <Link to={`/shop/${bookId}`}>
        <StyledCardImage image={image} />{' '}
      </Link>

      <StyledLink to={`/shop/${bookId}`}>{title}</StyledLink>
    </StyledCardContainer>
  );
};

export default ShopCard;
