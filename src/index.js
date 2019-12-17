import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept(App, render);
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();git ad
