import axios from 'axios';
import {API_URL} from '@env';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {accept: 'application/json'},
});

export default instance;
