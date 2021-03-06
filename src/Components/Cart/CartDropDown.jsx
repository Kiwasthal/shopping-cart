import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ClearFix from './Clearfix';
import bookStack from '../../Assets/bookStack.svg';
import { findTotalValue } from '../Helpers/TotalValue';

const CartContainer = styled.div`
  top: 65px;
  left: -60px;
  grid-area: 1 / 3 / 2 / 4;
  margin: auto;
  width: 80%;
  position: absolute;
  transition: all 200ms ease-in;
  opacity: ${props => props.opacity};
  display: ${props => props.display};
`;

const ShoppingCart = styled.div`
  z-index: 9000;

  margin: 20px 0;
  float: right;
  background: white;
  width: 320px;
  position: relative;
  border-radius: 3px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  ::after {
    bottom: 100%;
    left: 89%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: white;
    border-width: 8px;
    margin-left: -8px;
  }
`;

const ShoppingCartHeader = styled.div`
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
`;

const ShoppingCartTotal = styled.div`
  margin-top: 30px;
  float: right;
`;

const MainColorText = styled.span`
  color: #6394f8;
`;

const ShoppingCartItems = styled.ul`
  padding-top: 20px;
`;

const CheckoutButton = styled.button`
  background: #6394f8;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 15px 0;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  margin-left: 30px;
  align-self: center;
  :visited {
    text-decoration: none;
  }
`;

const StackLogoImage = styled.img`
  height: 50px;
  font-size: 24px;
  margin-top: 10px;
  float: left;
`;

const CartDropDown = ({ items, cartOpacity, close }) => {
  let totalPrice = findTotalValue(items);
  const [display, setDisplay] = useState('');

  useEffect(() => {
    cartOpacity === 0
      ? setTimeout(() => setDisplay('none'), 300)
      : setDisplay('');
  }, [cartOpacity]);

  return (
    <CartContainer opacity={cartOpacity} display={display}>
      <ShoppingCart>
        <ShoppingCartHeader>
          <StackLogoImage src={bookStack} />
          <ShoppingCartTotal>
            <MainColorText>Total : {totalPrice} ???</MainColorText>
          </ShoppingCartTotal>
        </ShoppingCartHeader>
        {/* <-- end of shopping card Header */}
        <ShoppingCartItems>
          {/* <-- create a 'card' for each Item added */}
          {items.length > 0
            ? items.map(item => (
                <ClearFix
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                />
              ))
            : null}
        </ShoppingCartItems>
        <ButtonLink to="/cart">
          <CheckoutButton onClick={close}>Checkout</CheckoutButton>
        </ButtonLink>
      </ShoppingCart>
    </CartContainer>
  );
};

export default CartDropDown;
