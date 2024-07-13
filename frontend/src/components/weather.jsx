/* eslint-disable no-unused-vars */
import'./weather.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await axios.get(`http://localhost:5000/weather?lat=${latitude}&lon=${longitude}`);
                        setWeather(response.data);
                    } catch (err) {
                        setError(err.message);
                    }
                });
            } else {
                setError('Geolocation is not supported by this browser.');
            }
        };

        fetchWeather();
    }, []);

    if (error) return <div>{error}</div>;

    return (
        <div className="weather">
            {weather ? (
                <>
                    <h2>{weather.name}</h2>
                    <img className="pic1" src="../../public/images/icon4.png" alt="" />
                    <h3>{new Date(weather.dt * 1000).toLocaleDateString()}</h3>
                    <h4>{Math.round(weather.main.temp)} Degrees</h4>
                    <h5>{weather.weather[0].description}</h5>
                </>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
};

export default Weather;
