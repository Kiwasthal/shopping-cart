import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartDropDown from '../../Cart/CartDropDown';

const StyledNavBar = styled.nav`
  grid-area: 2/ 1 / 3 /2;
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 1001;
  top: 0;
  height: 10vh;
  width: 100%;
  background-color: #b63e47;
`;

const NavBar = ({ count, clickCart, cartOpacity, items, total }) => {
  return (
    <StyledNavBar>
      <Link to="/">Home</Link>
      <p onClick={clickCart}>Cart</p>
      {<div>{count}</div>}
      <Link to="/shop">Shop</Link>
      <CartDropDown
        cartOpacity={cartOpacity}
        close={clickCart}
        items={items}
        total={total}
      />
    </StyledNavBar>
  );
};

export default NavBar;
