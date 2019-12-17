import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import './App.scss';
import Main from './components/Main';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
