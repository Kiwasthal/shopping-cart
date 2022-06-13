import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartDropDown from '../../Cart/CartDropDown';

const StyledNavBar = styled.nav`
  grid-area: 2/ 1 / 3 /2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 1001;
  top: 0;
  max-height: 10vh;
  width: 100%;
  background-color: #b63e47;
`;

const allLinks = styled(Link)`
  text-decoration: none;
`;

const HomeLink = styled(allLinks)`
  font-size: 22px;
  grid-area: 1 / 1 / 2 / 2;
`;

const ShopLink = styled(allLinks)`
  font-size: 22px;
  grid-area: 1 / 2 / 2 / 3;
`;

const CartContainer = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: grid;
  margin-left: 315px;
  margin-top: 20px;
  justify-content: center;
`;

const LinkPara = styled.p`
  margin: 0;
  padding: 0;
  align-self: center;
  justify-self: center;
`;

const NavBar = ({ count, clickCart, cartOpacity, items, total }) => {
  return (
    <StyledNavBar>
      <LinkPara>
        <HomeLink to="/">Home</HomeLink>
      </LinkPara>
      <LinkPara>
        <ShopLink to="/shop">Shop</ShopLink>
      </LinkPara>

      <CartContainer>
        <p onClick={clickCart}>Cart</p>
      </CartContainer>

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
