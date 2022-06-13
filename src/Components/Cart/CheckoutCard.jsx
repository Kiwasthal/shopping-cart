import { useEffect, useState } from 'react';
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

const CheckoutCard = ({ item, index, itemQ, id, methods }) => {
  let increment = () => methods.increment(id);

  return (
    <CartCard>
      <CardImg src={item.image} />
      <CardTitle>{item.name}</CardTitle>
      <ItemDetails>
        <ItemInfo>Price : {item.price}</ItemInfo>
        <ItemInfo>Price : {itemQ}</ItemInfo>
      </ItemDetails>
      <button onClick={increment}>ADD</button>
    </CartCard>
  );
};

export default CheckoutCard;