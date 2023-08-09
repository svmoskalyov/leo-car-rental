import axios from 'axios';

axios.defaults.baseURL = 'https://leo-car-rental-default-rtdb.firebaseio.com';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

export const getTotalCarsApi = async () => {
  console.log('🚀 ~ getTotalCarsApi ~ getTotalCarsApi:');

  const response = await axios.get('/adverts.json');

  console.log('🚀 ~ getTotalCarsApi ~ response.data', response.data);

  return response.data;
};

export const getCarsApi = async (startId = 100) => {
    console.log('🚀 ~ getCarsApi ~ getCarsApi:');
  console.log('🚀 ~ getCarsApi ~ startId:', startId);
  const limit = startId === 100 ? 8: 7;
  const endId = startId + limit;
  console.log('🚀 ~ getCarsApi ~ end:', endId);

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

  console.log('🚀 ~ getCarsApi ~ response:', response);
//   console.log('🚀 ~ getCarsApi ~ response.data:', response.data);

  return response;
};

// export const updateCarStatusApi = async ({ id, isFav }) => {
//   const response = await axios.put(`/adverts/${id}`, { isFav });
//   return response.data;
// };
