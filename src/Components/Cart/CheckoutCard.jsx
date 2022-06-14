import styled from 'styled-components';

const CartCard = styled.div`
  display: grid;
  width: 30%;
  height: minmax(130px, auto);
  grid-template-columns: 20% 50% 20%;
  grid-template-rows: 50% 50%;
  border: 1px solid;
`;

const CardImg = styled.img`
  grid-area: 1/1 / 3 / 2;
  height: 100px;
`;

const CardTitle = styled.p`
  margin: 0;
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

const CheckoutCard = ({ item, itemQuantity, id, methods }) => {
  let increment = () => methods.increment(item.id);
  let decrement = () => methods.decrement(item.id);

  return (
    <CartCard>
      <CardImg src={item.image} />
      <CardTitle>{item.name}</CardTitle>
      <ItemDetails>
        <ItemInfo>Price : {item.price} €</ItemInfo>
        <ItemInfo>Quantity : {item.quantity} </ItemInfo>
      </ItemDetails>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      <input
        type="number"
        onChange={e => methods.manageInput(item.id, e)}
        placeholder={itemQuantity}
      />
    </CartCard>
  );
};

export default CheckoutCard;
