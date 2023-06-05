import axios from 'axios';

axios.defaults.baseURL = 'https://63c27790b0c286fbe5ee1d8c.mockapi.io/users/';

export const fetchUsers = async () => {
  const response = await axios.get('/Users');
  return response.data;
};
