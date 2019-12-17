import { createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';

import { getBars } from '../apis/bars';

const defaultState = {
  buttons: [],
  bars: [],
  limit: 9999,
  currentBarIndex: 0,
  loading: true,
};

const barSlice = createSlice({
  name: 'bar',
  initialState: defaultState,
  reducers: {
    showLoading(state) {
      state.loading = true;
    },
    hideLoading(state) {
      state.loading = false;
    },
    fetchBarDataDone(state, action) {
      const { buttons, bars, limit } = action.payload;

      state.buttons = buttons || defaultState.buttons;
      state.bars = bars || defaultState.bars;
      state.limit = limit || defaultState.limit;
    },
    changeActiveBar(state, action) {
      state.currentBarIndex = action.payload.barIndex;
    },
    changeBarValue(state, action) {
      try {
        if (state.bars.length === 0) return;

        const { point } = action.payload;
        const { currentBarIndex, bars } = state;
        let newBarValue = bars[currentBarIndex] + point;

        if (newBarValue < 0) newBarValue = 0;
        state.bars[currentBarIndex] = newBarValue;
      } catch (err) {
        // console.log(err);
        // Report bug
      }
    },
  },
});

export const {
  changeActiveBar,
  changeBarValue,
  fetchBarDataDone,
  showLoading,
  hideLoading,
} = barSlice.actions;

export const getBarData = () => async dispatch => {
  try {
    dispatch(showLoading());
    const data = await getBars();
    dispatch(hideLoading());
    dispatch(fetchBarDataDone({ ...data }));
  } catch (err) {
    dispatch(hideLoading());
    notification.error({ message: err.message });
    console.log(err);
  }
};

export { defaultState };
export default barSlice.reducer;
