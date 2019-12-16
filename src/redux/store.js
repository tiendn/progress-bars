import { configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./giphySlice', () => {
    const newRootReducer = require('./giphySlice').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction;
export default store;
