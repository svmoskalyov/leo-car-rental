import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_DB_HOST;

export const getTotalCarsApi = async () => {
  const response = await axios.get('/adverts.json');
  return response.data;
};

export const getCarsApi = async (startId = 100) => {
  const limit = startId === 100 ? 8 : 7;
  const endId = startId + limit;

  const response = await axios
    .get('/adverts.json', {
      params: {
        orderBy: `"carId"`,
        startAt: startId,
        endAt: endId,
        print: 'pretty',
      },
    })
    .then(({ data }) => Object.entries(data).map(([, cars]) => ({ ...cars })));

  return response;
};
