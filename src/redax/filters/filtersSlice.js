import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: 'All',
  price: 0,
  mileageMin: 0,
  mileageMax: 0,
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
  },
});

export const { setBrand, setPrice } = filtersSlice.actions;
export default filtersSlice.reducer;
