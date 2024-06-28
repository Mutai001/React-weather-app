import { WeatherData } from '../types';

const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
  const data = await response.json();
  return {
    city: data.name,
    description: data.weather[0].description,
    temperature: data.main.temp,
  };
};
