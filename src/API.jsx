import axios from 'axios';

axios.defaults.baseURL = 'https://63c27790b0c286fbe5ee1d8c.mockapi.io/users/';

export const fetchUsers = async () => {
  try {
    const response = await axios.get('/Users');
    console.log(response)
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};
