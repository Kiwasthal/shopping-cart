import styled from 'styled-components';
import CheckoutCard from './CheckoutCard';
import { findTotalValue } from '../Helpers/TotalValue';

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
    let updateQuantity = prevItems.map(item => {
      if (item.id === id && item.quantity > 0) item.quantity--;
      return item;
    });
    setItems(updateQuantity);
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
    ? (content = <p>Cart is empty</p>)
    : (content = (
        <StyledContainer>
          <CartItems>
            {displayItems} <p>Total :{findTotalValue(items)}</p>
          </CartItems>
        </StyledContainer>
      ));

  return content;
};

export default Cart;
