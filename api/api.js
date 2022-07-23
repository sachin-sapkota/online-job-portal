import axios from 'axios';
let url = {
  test: 'http://localhost:3000',
};
const api = axios.create({
  baseURL: url.test,
  headers: {
    Accept: 'application/json',
  },
});

export default api;
