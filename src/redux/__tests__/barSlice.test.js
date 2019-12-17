import barReducer from '../barSlice';

import { defaultState } from '../barSlice';

describe('barSlice', () => {
  let state;
  beforeEach(() => {
    state = defaultState;
  });

  it('should return the initial state', () => {
    expect(barReducer(null, {})).toEqual(state);
  });

  //   it('should handle the getBarAsync action correctly', () => {
  //     const params = { buttons: [1, 2, 3], bars: [23, -10], limit: 100 };
  //     const expectedResult = { ...state, ...params };
  //     expect(barReducer(state, getBarAsync(params))).toEqual(expectedResult);
  //   });
  //   it('should handle the loading action correctly', () => {
  //     const expectedResult = { ...state, loading: true };
  //     expect(barReducer(state, loading())).toEqual(expectedResult);
  //   });

  //   it('should handle the stopLoading action correctly', () => {
  //     const expectedResult = { ...state, loading: false };
  //     expect(barReducer(state, stopLoading())).toEqual(expectedResult);
  //   });
});