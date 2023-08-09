import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarsApi, getTotalCarsApi } from 'services/firebaseApi';
// import {
//   getCarsApi,
//   getTotalCarsApi,
//   updateCarStatusApi,
// } from 'services/mockApi';

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
    console.log("🚀 ~ startId:", startId)
    try {
      const data = await getCarsApi(startId);
      console.log("🚀 ~ data:", data)
      console.log("🚀 ~ data.length:", data.length)
      return { data };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const updateCarStatus = createAsyncThunk(
  'cars/updateStatus',
  async (data, { rejectWithValue }) => {
    try {
      // const newData = await updateCarStatusApi(data);
      // return newData;
    } catch (error) {
      return rejectWithValue(error.meassge);
    }
  },
);
