import axios from 'axios';
axios.defaults.baseURL = 'https://63c17bd271656267187c7bed.mockapi.io/';

export const fetchUsers = async () => {
  const response = await axios.get('/users');
  return response.data;
};
