import styled from 'styled-components';
import NavBar from '../Shop/Navbar/Navbar';
import CheckoutCard from './CheckoutCard';
import { useEffect, useState } from 'react';
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

const Cart = ({ items, total, cart }) => {
  const [quantities, setQuantities] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  let content;

  useEffect(() => {
    setQuantities(items);
    setTotalPrice(findTotalValue(items));
    setIsLoaded(true);
  }, [items, quantities]);

  const manageInput = (id, e) => {
    let prevQuantities = [...quantities];
    let newQuantities = prevQuantities.map(value => {
      if (value.id === id) value.quantity = e.target.value;
      return value;
    });
    setQuantities(newQuantities);
  };

  const incrementQuantity = id => {
    let prevQuantities = [...quantities];
    let newQuantities = prevQuantities.map(value => {
      if (value.id === id) value.quantity++;
      return value;
    });
    setQuantities(newQuantities);
  };

  const decrementQuantity = id => {
    let prevQuantities = [...quantities];
    let newQuantities = prevQuantities.map(value => {
      if (value.id === id && value.quantity > 0) value.quantity--;
      return value;
    });
    setQuantities(newQuantities);
  };

  const methods = {
    increment: incrementQuantity,
    decrement: decrementQuantity,
    manageInput: manageInput,
  };

  const displayItems =
    items.length > 0
      ? items.map((item, index) => (
          <CheckoutCard
            item={item}
            key={index}
            id={item.id}
            index={index}
            itemQ={isLoaded ? quantities[index].quantity : 0}
            methods={methods}
          />
        ))
      : null;

  quantities.length === 0
    ? (content = <p>Cart is empty</p>)
    : (content = (
        <StyledContainer>
          <CartItems>
            {displayItems} <p>Total :{totalPrice}</p>
          </CartItems>
        </StyledContainer>
      ));

  return content;
};

export default Cart;
