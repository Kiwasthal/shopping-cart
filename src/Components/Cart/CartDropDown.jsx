import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ClearFix from './Clearfix';

const CartContainer = styled.div`
  top: -45px;
  left: -30px;
  margin: auto;
  width: 80%;
  position: relative;
  transition: all 200ms ease-in;
  opacity: ${props => props.opacity};
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
  float: right;
`;

const LighterText = styled.span`
  color: #abb0be;
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

  &:hover {
    background: lighten(#6394f8, 3%);
  }
`;

const CartDropDown = ({ total, items, cartOpacity, close }) => {
  let totalPrice = total();
  return (
    <CartContainer opacity={cartOpacity}>
      <ShoppingCart>
        <ShoppingCartHeader>
          <div>ShoppingIcon 3</div>
          <ShoppingCartTotal>
            <LighterText>Total : {totalPrice || 0}</LighterText>
            <MainColorText>{total}</MainColorText>
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
        <Link to="/cart">
          <CheckoutButton onClick={close}>Checkout</CheckoutButton>
        </Link>
      </ShoppingCart>
    </CartContainer>
  );
};

export default CartDropDown;

//use this later//
const icon = styled.div`
  color: #515783;
  font-size: 24px;
  margin-right: 7px;
  float: left;
`;
