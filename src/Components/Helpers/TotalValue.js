export const findTotalValue = value =>
  (
    Math.round(
      value.reduce(
        (prevValue, nextValue) =>
          prevValue + nextValue.price * nextValue.quantity,
        0
      ) * 100
    ) / 100
  ).toFixed(2);
