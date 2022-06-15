import styled from 'styled-components';
import CheckoutCard from './CheckoutCard';
import { findTotalValue } from '../Helpers/TotalValue';
import EmptyHolder from '../../Assets/empty.png';

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
  justify-items: center;
  grid-template-rows: repeat(auto-fit);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 1em;
  padding: 25px;
`;

const FinalizeOrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10%;
  gap: 0.5rem;
`;

const OrderTotalText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 900;
  font-size: 32px;
`;

const OrderNowBtn = styled.button`
  background-color: #c2410c;
  color: #fff;
  font-size: 22px;
  padding: 10px;
  font-weight: 900;
  text-align: center;
`;

const EmptyCart = styled.div`
  margin-top: 300px;
  grid-area: 3 / 1 / 2 /2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const HolderImg = styled.img`
  height: 50%;
`;

const EmptyText = styled.p`
  font-size: 100px;
`;

const Cart = ({ items, setItems }) => {
  let content;

  const manageInput = (id, e) => {
    let prevItems = [...items];
    let newQuantity = prevItems.map(value => {
      if (value.id === id) {
        if (e.target.value > 100) e.target.value = 100;
        if (e.target.value < 0) e.target.value = 0;
        value.quantity = e.target.value;
      }
      return value;
    });
    setItems(newQuantity);
  };

  const incrementQuantity = id => {
    let prevItems = [...items];
    let newQuantities = prevItems.map(value => {
      if (value.id === id) value.quantity++;
      return value;
    });
    setItems(newQuantities);
  };

  const decrementQuantity = id => {
    let prevItems = [...items];
    let updatedQuantity = prevItems.map(item => {
      if (item.id === id && item.quantity > 0) item.quantity--;
      return item;
    });
    setItems(updatedQuantity);
  };

  const methods = {
    increment: incrementQuantity,
    decrement: decrementQuantity,
    manageInput: manageInput,
  };

  const displayItems =
    items.length > 0
      ? items.map(item => (
          <CheckoutCard item={item} key={item.id} methods={methods} />
        ))
      : null;

  items.length === 0
    ? (content = (
        <EmptyCart>
          <HolderImg src={EmptyHolder} />
          <EmptyText>Your Cart is empty</EmptyText>
        </EmptyCart>
      ))
    : (content = (
        <StyledContainer>
          <CartItems>
            {displayItems}{' '}
            <FinalizeOrderWrapper>
              <OrderTotalText>Total :{findTotalValue(items)}</OrderTotalText>
              <OrderNowBtn>PLACE ORDER</OrderNowBtn>
            </FinalizeOrderWrapper>
          </CartItems>
        </StyledContainer>
      ));

  return content;
};

export default Cart;
