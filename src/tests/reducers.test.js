import reducer from '../reducers/';
import ProductMock from './mocks/ProductMock';

describe('Reducers', () => {
  test('Retomar initial State', () => {
    expect(reducer({}, '')).toEqual({});
  });
});
