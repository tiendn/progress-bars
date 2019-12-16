import { combineReducers } from '@reduxjs/toolkit';
import barReducer from './barSlice';

const rootReducer = combineReducers({
  bar: barReducer,
});

export default rootReducer;
