import { createSelector } from '@reduxjs/toolkit';

export const selectFilterBrand = state => state.filters.brand;
export const selectFilterYear = state => state.filters.year;
export const selectFilterPrice = state => state.filters.price;

export const selectFilterChoiced = createSelector(
  [selectFilterBrand, selectFilterYear, selectFilterPrice],
  (brand, year, price) => {
    console.log('-- selectFilterChoiced --');
    console.log('🚀 ~ brand:', brand);
    console.log('🚀 ~ year:', year);
    console.log('🚀 ~ price:', price);
    if (brand === 'All' && year === 0 && price === 0) {
      return false;
    }
    return true;
  },
);
