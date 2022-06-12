import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

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

const NavBar = () => {
  return (
    <StyledNavBar>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </StyledNavBar>
  );
};

export default NavBar;
