import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import AppInit from '../AppInit';
import configureStore from '../../redux/store';
import { hideLoading } from '../../redux/barSlice';

describe('AppInit testing', () => {
  let store;

  beforeAll(() => {
    store = configureStore;
  });

  it('renders with content', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <AppInit />
      </Provider>,
    );

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).not.toBeNull();
  });

  it('renders loading in default', async () => {
    const { getByTestId, container } = render(
      <Provider store={store}>
        <AppInit />
      </Provider>,
    );

    const Spin = await getByTestId('appLoading');
    expect(Spin).toMatchSnapshot();
    expect(container.contains(Spin)).toBe(true);
  });

  it('renders Result error when no data available', async () => {
    const { getByTestId, container } = render(
      <Provider store={store}>
        <AppInit />
      </Provider>,
    );

    store.dispatch(hideLoading());
    const ResultDefault = await getByTestId('appDefault');
    expect(ResultDefault).toMatchSnapshot();
    expect(container.contains(ResultDefault)).toBe(true);
  });
});
