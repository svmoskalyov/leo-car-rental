import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCarsApi,
  getTotalCarsApi,
  updateCarStatusApi,
} from 'services/mockApi';

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
  'cars/getPage',
  async (pg, thunkApi) => {
    try {
      const data = await getCarsApi(pg);
      return { data, pg };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const updateCarStatus = createAsyncThunk(
  'cars/updateStatus',
  async (data, { rejectWithValue }) => {
    try {
      const newData = await updateCarStatusApi(data);
      return newData;
    } catch (error) {
      return rejectWithValue(error.meassge);
    }
  },
);
