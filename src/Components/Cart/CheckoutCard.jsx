import styled from 'styled-components';

const CartCard = styled.div`
  display: grid;
  width: 30%;
  height: minmax(130px, auto);
  grid-template-columns: 20% 30% 1fr;
  grid-template-rows: 50% 50%;
  border: 1px solid;
`;

const CardImg = styled.img`
  grid-area: 1/1 / 3 / 2;
  height: 100px;
`;

const CardTitle = styled.p`
  margin: 0;
  align-self: flex-end;
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;
  grid-area: 2 / 2 / 3 / 3;
`;

const ItemInfo = styled.p`
  margin: 0;
`;

const ManageQuantityWrapper = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const QuantityHandleButton = styled.button`
  background-color: #b63e47;
  color: #fff;
  height: 70%;
  font-size: 24px;
  font-weight: 600;
  border: none;
  width: 19%;
  border-radius: 3px;
`;

const CustomQuantityInput = styled.input`
  grid-area: 2 / 3 / 3 / 4;
  font-size: 18px;
  height: 60%;
  justify-self: center;
  width: 70%;
  text-align: center;
  outline: 1px solid black;
  transition: all 200ms ease-in;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:hover {
    outline: 1px solid #cf343e;
  }
  &:focus {
    border-radius: 20px;
    outline: 1px solid #cf343e;
  }
`;

const CheckoutCard = ({ item, methods }) => {
  let increment = () => methods.increment(item.id);
  let decrement = () => methods.decrement(item.id);

  return (
    <CartCard>
      <CardImg src={item.image} />
      <CardTitle>{item.name}</CardTitle>
      <ItemDetails>
        <ItemInfo>Price : {item.price} €</ItemInfo>
      </ItemDetails>
      <ManageQuantityWrapper>
        <QuantityHandleButton onClick={increment}> + </QuantityHandleButton>
        <ItemInfo>Quantity : {item.quantity} </ItemInfo>
        <QuantityHandleButton onClick={decrement}> - </QuantityHandleButton>
      </ManageQuantityWrapper>
      <CustomQuantityInput
        type="number"
        onChange={e => methods.manageInput(item.id, e)}
        placeholder="Input custom quantity"
      />
    </CartCard>
  );
};

export default CheckoutCard;
