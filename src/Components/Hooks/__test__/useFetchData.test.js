import { renderHook, act } from '@testing-library/react';
import UseBookData from '../useFetchData';

const getControlledPromise = () => {
  let deffered;
  const promise = new Promise((resolve, reject) => {
    deffered = { resolve, reject };
  });
  return { deffered, promise };
};

describe('useFetchData', () => {
  it('fetches correctly from url', async () => {
    global.fetch = jest.fn();
    //esLint formatting warning error! operation testing regardless of options
    await act(async () => renderHook(() => UseBookData()));
    expect(global.fetch).not.toBeCalledWith('empty check');
    expect(global.fetch).toBeCalledWith(
      'https://gutendex.com/books?topic=fantasy'
    );
  });
  describe('while fetching data', () => {
    it('handles loading state correctly', async () => {
      const { deffered, promise } = getControlledPromise();
      global.fetch = jest.fn(() => promise);
      const { result } = renderHook(UseBookData);
      expect(result.current[0]).toBe(true);
      await act(async () => deffered.resolve());
      expect(result.current[0]).toBe(false);
    });
  });

  describe('when data fetched sucessfully', () => {
    it('handles succesfull state correctly', async () => {
      const { deffered, promise } = getControlledPromise();
      global.fetch = jest.fn(() => promise);
      const { result } = renderHook(UseBookData);
      await act(async () =>
        deffered.resolve({ json: () => ({ data: 'fooBook' }) })
      );
      expect(result.current[1].data).toBe('fooBook');
    });
  });
});
