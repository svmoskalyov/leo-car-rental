import { createSelector } from '@reduxjs/toolkit';

export const selectFilterBrand = state => state.filters.brand;
export const selectFilterPrice = state => state.filters.price;

export const selectFilterChoiced = createSelector(
  [selectFilterBrand, selectFilterPrice],
  (brand, price) => {
    console.log('-- selectFilterChoiced --');
    console.log("🚀 ~ brand:", brand)
    console.log("🚀 ~ price:", price)
    if (brand === 'All' && price === 0) {
      return false;
    }
    return true;
  },
);
