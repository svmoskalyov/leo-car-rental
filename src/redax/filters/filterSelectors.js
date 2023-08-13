import { createSelector } from '@reduxjs/toolkit';

export const selectFilterBrand = state => state.filters.brand;

export const selectFilterChoiced = createSelector(
  [selectFilterBrand],
  brand => {
    if (brand === 'All') {
      return false;
    }
    return true;
  },
);
