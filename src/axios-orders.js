import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-3f8eb.firebaseio.com/'
});

export default instance;