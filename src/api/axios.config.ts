import axios from 'axios';
const BASE_URLs = {
  auth: 'http://localhost:3000/auth/',
};
axios.defaults.withCredentials = true;

export { BASE_URLs };
