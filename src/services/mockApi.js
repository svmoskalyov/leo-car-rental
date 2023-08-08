import axios from 'axios';

axios.defaults.baseURL = 'https://64c3e72367cfdca3b66070c2.mockapi.io';

export const getTotalCarsApi = async () => {
  const response = await axios.get('/adverts');
  return response.data;
};

export const getCarsApi = async (page = 1) => {
  const response = await axios.get('/adverts', {
    params: {
      page,
      limit: 8,
    },
  });
  return response.data;
};

export const updateCarStatusApi = async ({ id, isFav }) => {
  const response = await axios.put(`/adverts/${id}`, { isFav });
  return response.data;
};
