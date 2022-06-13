import styled from 'styled-components';
import NavBar from '../Shop/Navbar/Navbar';

const StyledContainer = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-rows: 8vh 1fr;

  width: 100vw;
  overflow: hidden;
`;

const CartItems = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(auto-fit);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 1em;
  border: 3px solid black;
  padding: 25px;
`;

const CartCard = styled.div`
  display: grid;
  height: minmax(130px, auto);
  grid-template-columns: 20% 50% 20%;
  grid-template-rows: 50% 50%;
  border: 1px solid;
`;

const CardImg = styled.img`
  grid-area: 1/1 / 3 / 2;
  height: 100px;
`;

const CardTitle = styled.p`
  margin: 0;
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;
  grid-area: 2 / 2 / 3 / 3;
`;

const ItemInfo = styled.p`
  margin: 0;
`;

const Cart = ({ clickCart, cartOpacity, items, total }) => {
  const displayItems =
    items.length > 0
      ? items.map(item => (
          <CartCard>
            <CardImg src={item.image} />
            <CardTitle>{item.name}</CardTitle>
            <ItemDetails>
              <ItemInfo>Price : {item.price}</ItemInfo>
              <ItemInfo>Quantity : {item.quantity}</ItemInfo>
            </ItemDetails>
          </CartCard>
        ))
      : null;
  return (
    <StyledContainer>
      <NavBar
        clickCart={clickCart}
        cartOpacity={cartOpacity}
        items={items}
        total={total}
      />
      <CartItems>{displayItems}</CartItems>
    </StyledContainer>
  );
};

export default Cart;
