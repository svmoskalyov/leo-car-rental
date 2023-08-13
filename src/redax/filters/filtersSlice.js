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
    setFilter(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    setFiltersReset() {
      return initialState;
    },
  },
});

export const { setFilter, setFiltersReset } = filtersSlice.actions;
export default filtersSlice.reducer;
