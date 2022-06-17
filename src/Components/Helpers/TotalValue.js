export const findTotalValue = values =>
  (
    Math.round(
      values.reduce(
        (prevValue, nextValue) =>
          prevValue + nextValue.price * nextValue.quantity,
        0
      ) * 100
    ) / 100
  ).toFixed(2);
