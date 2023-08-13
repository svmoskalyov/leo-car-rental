import { createSelector } from '@reduxjs/toolkit';

export const selectFilterBrand = state => state.filters.brand;
export const selectFilterType = state => state.filters.type;
export const selectFilterYear = state => state.filters.year;
export const selectFilterPrice = state => state.filters.price;

export const selectFilterChoiced = createSelector(
  [selectFilterBrand, selectFilterType, selectFilterYear, selectFilterPrice],
  (brand, type, year, price) => {
    if (brand === 'All' && type === 'All' && year === 0 && price === 0) {
      return false;
    }
    return true;
  },
);
