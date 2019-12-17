import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import ProgressBars from '../ProgressBars';
import configureStore from '../../redux/store';
import mockData from '../../../mock/data';
import { fetchBarDataDone, changeActiveBar } from '../../redux/barSlice';

describe('ProgressBars testing', () => {
  let store;

  beforeAll(() => {
    store = configureStore;
  });

  it('renders with content', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <ProgressBars />
      </Provider>,
    );

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).not.toBeNull();
  });

  it('change bar value after fire event click button, with current index = 0, value = 59, add +41 with button index = 0', async () => {
    const barIndex = 0;

    store.dispatch(fetchBarDataDone({ ...mockData }));
    store.dispatch(changeActiveBar({ barIndex }));

    const { getAllByTestId } = render(
      <Provider store={store}>
        <ProgressBars />
      </Provider>,
    );

    const BarButtonFirst = await getAllByTestId('barButton')[0];
    const BarItemFirst = await getAllByTestId('barItemValue')[0];

    fireEvent.click(BarButtonFirst);

    // 59 + 41 = 100
    // limit = 170
    expect(BarItemFirst.innerHTML).toBe('58% (100 / 170)');
  });

  it('change bar value after fire event click button, with current index = 0, value = 59, add -47 with button index = 3 two times', async () => {
    const barIndex = 0;

    store.dispatch(fetchBarDataDone({ ...mockData }));
    store.dispatch(changeActiveBar({ barIndex }));

    const { getAllByTestId } = render(
      <Provider store={store}>
        <ProgressBars />
      </Provider>,
    );

    const BarButtonThird = await getAllByTestId('barButton')[3];
    const BarItemFirst = await getAllByTestId('barItemValue')[0];

    fireEvent.click(BarButtonThird);
    fireEvent.click(BarButtonThird);

    // 59 - 47 - 47 < 0
    // limit = 170
    expect(BarItemFirst.innerHTML).toBe('0% (0 / 170)');
  });
});
