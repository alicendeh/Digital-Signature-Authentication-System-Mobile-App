import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8080/app',
});

// const authApi = axios.create({
//   baseURL: 'https://cryptsao-api.herokuapp.com/api'
// });

// (async () => {
//   authApi.defaults.headers.common['Authorization'] = `Bearer ${String(
//     await AsyncStorage.getItem('token')
//   )}`;
// })();

export { api };
