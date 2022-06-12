import styled from 'styled-components';
import NavBar from '../Shop/Navbar/Navbar';

const Cart = ({ clickCart, cartOpacity, items, total }) => {
  return (
    <NavBar
      clickCart={clickCart}
      cartOpacity={cartOpacity}
      items={items}
      total={total}
    />
  );
};

export default Cart;
