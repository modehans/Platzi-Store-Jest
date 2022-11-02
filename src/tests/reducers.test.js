import reducer from '../reducers/';
import ProductMock from './mocks/ProductMock';

describe('Reducers', () => {
  test('Retomar initial State', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_To_CART', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
