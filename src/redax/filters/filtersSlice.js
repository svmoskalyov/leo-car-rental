import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: 'All',
  price: '',
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
  },
});

export const { setBrand } = filtersSlice.actions;
export default filtersSlice.reducer;
