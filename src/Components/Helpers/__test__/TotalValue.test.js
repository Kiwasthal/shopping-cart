import { findTotalValue } from '../TotalValue';

const values = [
  { price: '12', quantity: '1' },
  { price: '10', quantity: '2' },
  { price: '100', quantity: '0' },
];

describe('findTotalValue', () => {
  it('returns the correct result', () => {
    const result = findTotalValue(values);
    expect(result).toStrictEqual('32.00');
  });
});
