import React, { useState, useEffect } from 'react';
import { getWeatherData } from '../services/WeatherService';
import WeatherCard from '../components/WeatherCard';
import { WeatherData } from '../types';

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getWeatherData('London').then(data => {
      setWeatherData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        weatherData && <WeatherCard weather={weatherData} />
      )}
    </div>
  );
};

export default Home;
