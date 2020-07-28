import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use(config => {
  const appid = '4ea6ac4d4cc785080be061983c674910';
  config.url = `${config.url}&appid=${appid}&lang=pt`;

  return { ...config };
});

export default api;
