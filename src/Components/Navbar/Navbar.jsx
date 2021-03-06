import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import CartDropDown from '../Cart/CartDropDown';
import cartIcon from '../../Assets/cartIcon.svg';
import { useEffect, useState } from 'react';

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
  font-size: 24px;
  text-align: start;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  transform: scale(1);
  transition: all 200ms ease-in;
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    bottom: -3px;
    height: 3px;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  :hover {
    transform: scale(1.1);
  }
  :hover::after {
    transform: scaleX(1.1);
    transform-origin: bottom left;
  }
  :visited {
    color: #fff;
  }
`;

const HomeLink = styled(allLinks)`
  grid-area: 1 / 1 / 2 / 2;
`;

const ShopLink = styled(allLinks)`
  grid-area: 1 / 2 / 2 / 3;
`;

const CartContainer = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: grid;
  margin-left: 315px;
  margin-top: 10px;
  justify-content: center;
  position: relative;
`;

const LinkPara = styled.p`
  padding: 0;
  margin: 0;
  color: black;
  align-self: center;
  justify-self: center;
`;

const CountContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 49%;
  border-radius: 50px;
  height: 30px;
  width: 30px;
  background-color: #fef08a;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartImg = styled.img`
  height: 50%;
  cursor: pointer;
  align-self: center;
`;

const NavBar = ({ items, cartHandler }) => {
  let navigation = useLocation();

  const [count, setCount] = useState(0);
  const { show, isShowing, opacity } = cartHandler;

  const findCount = values => {
    let count = 0;
    values.forEach(value => (count = count + value.quantity));
    if (count >= 100) return '99+';
    return parseInt(count, 10);
  };

  useEffect(() => {
    if (items.length > 0) setCount(findCount(items));
  }, [items]);

  if (
    navigation.pathname !== '/shopping-cart' &&
    navigation.pathname !== '/shopping-cart/'
  )
    return (
      <StyledNavBar>
        <LinkPara onClick={isShowing ? show : null}>
          <HomeLink to="/shopping-cart">Home</HomeLink>
        </LinkPara>
        <LinkPara onClick={isShowing ? show : null}>
          <ShopLink to="shop">Shop</ShopLink>
        </LinkPara>

        <CartContainer>
          {items.length > 0 ? <CountContainer>{count}</CountContainer> : null}
          <CartImg src={cartIcon} onClick={show} />
        </CartContainer>

        <CartDropDown cartOpacity={opacity} close={show} items={items} />
      </StyledNavBar>
    );
};

export default NavBar;
