import axios from "axios";


const BASE_URL = 'https://17bb-118-99-65-105.ngrok-free.app/api/login';

export const getData = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
  console.log(response.data);
};

export const searchWeather = async (query) => {
  const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${query}&aqi=no`);
  return response.data;
};
