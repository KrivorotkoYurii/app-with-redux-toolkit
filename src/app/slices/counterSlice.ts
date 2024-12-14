/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type Counter = {
  cash: number;
};

const initialState: Counter = {
  cash: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: state => {
      state.cash += 1;
    },
    take: state => {
      state.cash -= 1;
    },
    setValue: (state, action) => {
      state.cash = action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { add, take, setValue } = counterSlice.actions;
