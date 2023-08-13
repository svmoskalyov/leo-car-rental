import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import carsReducer from './cars/carsSlice';
import filtersReducer from './filters/filtersSlice';

const persistCarsConfig = {
  key: 'cars',
  storage,
  blacklist: ['error', 'isLoading'],
};

const persistFilersConfig = {
  key: 'filters',
  storage,
};

const persistedCarsReducer = persistReducer(persistCarsConfig, carsReducer);
const persistedFiltersReducer = persistReducer(
  persistFilersConfig,
  filtersReducer,
);

export const store = configureStore({
  reducer: {
    cars: persistedCarsReducer,
    filters: persistedFiltersReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
