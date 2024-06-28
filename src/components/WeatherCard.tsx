import React from 'react';
import { WeatherData } from '../types';

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-xl font-bold">{weather.city}</h2>
      <p>{weather.description}</p>
      <p>{weather.temperature}°C</p>
    </div>
  );
};

export default WeatherCard;
