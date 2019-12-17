import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import ProgressBars from '../ProgressBars';
import configureStore from '../../redux/store';

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
});
