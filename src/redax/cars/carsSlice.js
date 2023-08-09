import { createSlice } from '@reduxjs/toolkit';
import { getCars, getTotalCars } from './carsOperations';

const initialState = {
  items: [],
  favorites: [],
  totalCars: 0,
  startId: 100,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFavorite(state, { payload }) {
      state.items = state.items.map(el =>
        el.carId !== payload.carId ? el : { ...payload },
      );

      payload.isFav
        ? state.favorites.push(payload)
        : (state.favorites = state.favorites.filter(
            el => el.carId !== payload.carId,
          ));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTotalCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.totalCars = payload.length;
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [
          ...state.items,
          ...payload.data.map(el => ({ ...el, isFav: false })),
        ];
        state.startId = state.startId + payload.data.length;
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        action =>
          action.type.startsWith('cars') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});

export const { setFavorite } = carsSlice.actions;
export default carsSlice.reducer;
