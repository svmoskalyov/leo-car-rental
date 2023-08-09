import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarsApi, getTotalCarsApi } from 'services/firebaseApi';

export const getTotalCars = createAsyncThunk(
  'cars/getTotal',
  async (_, thunkApi) => {
    try {
      const data = await getTotalCarsApi();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getCars = createAsyncThunk(
  'cars/getCards',
  async (startId, thunkApi) => {
    try {
      const data = await getCarsApi(startId);
      return { data };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
