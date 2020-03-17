import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://193.124.114.46:3001',
});

export default instance;
