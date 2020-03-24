import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apirocketshoes.herokuapp.com/',
});

export default api;
