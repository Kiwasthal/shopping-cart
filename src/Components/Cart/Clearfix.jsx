import styled from 'styled-components';

const ClearFixItem = styled.li`
  list-style: none;
  margin-bottom: 18px;
  ::after {
    content: '';
    display: table;
    clear: both;
  }
`;

const ItemImage = styled.img`
  height: 75px;
  width: 50px;
  float: left;
  margin-right: 12px;
`;

const ItemName = styled.span`
  display: block;
  padding-top: 10px;
  font-size: 16px;
`;

const ItemPrice = styled.span`
  color: #6394f8;
  margin-right: 8px;
`;

const ItemQuantity = styled.span`
  color: #abb0be;
`;

const ClearFix = ({ image, name, quantity, price }) => {
  return (
    <ClearFixItem>
      <ItemImage src={image} alt={`image for ${name}`} />
      <ItemName>{name}</ItemName>
      <ItemPrice>Price :{price}€</ItemPrice>
      <ItemQuantity>Quantity: {quantity}</ItemQuantity>
    </ClearFixItem>
  );
};

export default ClearFix;
