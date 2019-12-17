import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BarItem from '../BarItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BarItem value={20} limit={100} active />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders matching snapshot', () => {
  const { baseElement } = render(<BarItem value={120} limit={100} active />);
  expect(baseElement).toMatchSnapshot();
});

it('render right value', async () => {
  const value = 120;
  const { findByTestId } = render(<BarItem value={value} limit={100} active />);
  const textValue = await findByTestId('barItemValue');

  expect(textValue.innerHTML).toBe(`${value}%`);
});

it('render with class "barItemLimit" when the value over limit', async () => {
  const { findByTestId } = render(<BarItem value={120} limit={100} active />);
  const divHighlight = await findByTestId('barItemHightlight');

  expect(divHighlight).toHaveClass('barItemLimit');
});
