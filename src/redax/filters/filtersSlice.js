import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: 'All',
  type: 'All',
  year: 0,
  price: 0,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrand(state, { payload }) {
      state.brand = payload;
    },
    setPrice(state, { payload }) {
      state.price = payload;
    },
    setYear(state, { payload }) {
      state.year = payload;
    },
  },
});

export const { setBrand, setYear, setPrice } = filtersSlice.actions;
export default filtersSlice.reducer;
