import {
  defaultState,
  hideLoading,
  changeActiveBar,
  changeBarValue,
  fetchBarDataDone,
} from '../barSlice';
import configureStore from '../../redux/store';
import mockData from '../../../mock/data';

describe('barSlice', () => {
  let state;
  let store;

  beforeEach(() => {
    store = configureStore;
    state = defaultState;
  });

  it('should return the initial state', () => {
    expect(store.getState().bar).toEqual(state);
  });

  it('should hide loading with dispatch action', () => {
    store.dispatch(hideLoading());
    expect(store.getState().bar.loading).toEqual(false);
  });

  it('should change right bar index', () => {
    const newBarIndex = 1;
    store.dispatch(changeActiveBar({ barIndex: newBarIndex }));
    expect(store.getState().bar.currentBarIndex).toEqual(newBarIndex);
  });

  it('should change bar value with bar[0], mock value = 59, point +30', () => {
    const point = 30;
    const barIndex = 0;
    store.dispatch(fetchBarDataDone({ ...mockData }));
    store.dispatch(changeActiveBar({ barIndex }));
    store.dispatch(changeBarValue({ point }));
    const { currentBarIndex, bars } = store.getState().bar;

    expect(bars[currentBarIndex]).toEqual(89);
  });

  it('should change right bar value to 0 with bar[0], mock value = 59, point -90', () => {
    const point = -90;
    const barIndex = 0;
    store.dispatch(fetchBarDataDone({ ...mockData }));
    store.dispatch(changeActiveBar({ barIndex }));
    store.dispatch(changeBarValue({ point }));
    const { currentBarIndex, bars } = store.getState().bar;

    expect(bars[currentBarIndex]).toEqual(0);
  });
});
