import axios from 'axios';
const BASE_URL = {
  auth: 'http://localhost:3000/auth/',
};
axios.defaults.withCredentials = true;

export { BASE_URL };
