import styled from 'styled-components';
import NavBar from '../Shop/Navbar/Navbar';

const Cart = ({ clickCart, cartOpacity }) => {
  return <NavBar clickCart={clickCart} cartOpacity={cartOpacity} />;
};

export default Cart;
