import styled from 'styled-components';
import NavBar from '../Shop/Navbar/Navbar';

const Cart = ({ clickCart, cartOpacity, items }) => {
  return (
    <NavBar clickCart={clickCart} cartOpacity={cartOpacity} items={items} />
  );
};

export default Cart;
