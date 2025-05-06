import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import InfoPanel from "./components/InfoPanel";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [hourly, setHourly] = useState([]);
  const [city, setCity] = useState(null);
  const [selectedDay, setSelectedDay] = useState("Today");

  const cities = ["Delhi", "Mumbai", "London", "New York", "Tokyo"];

  useEffect(() => {
    if (city) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await axios.get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const detected = res.data.city || res.data.locality || res.data.principalSubdivision;
          setCity(cities.includes(detected) ? detected : "Delhi");
        } catch {
          setCity("Delhi");
        }
      },
      () => setCity("Delhi")
    );
  }, []);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/weather/${city}`);
        const data = res.data;

        const iconCode = data.icon;

        setWeather({
          temp: data.temp,
          feelsLike: data.feelsLike,
          city: data.city,
          description: data.description,
          iconCode,
          sunset: data.sunset,
        });

        const baseTemp = Math.round(data.temp);
        const hourlyData = [
          { time: "Now", temp: baseTemp },
          { time: "2 AM", temp: baseTemp - 2 },
          { time: "3 AM", temp: baseTemp - 3 },
          { time: "4 AM", temp: baseTemp - 4 },
        ];

        setHourly(
          (selectedDay === "Tomorrow"
            ? hourlyData.map((h) => ({ ...h, temp: h.temp + 2 }))
            : hourlyData
          ).map((h) => ({
            ...h,
            iconCode,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch weather:", error.message);
      }
    };

    fetchWeather();
  }, [city, selectedDay]);

  return (
    <div className="min-h-screen bg-black bg-cover bg-center p-6">
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          {weather ? (
            <WeatherCard
              weather={weather}
              selectedDay={selectedDay}
              cities={cities}
              city={city}
              setCity={setCity}
              setSelectedDay={setSelectedDay}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
  
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="bg-white bg-opacity-30 p-4 rounded-lg ">
            <HourlyForecast hourly={hourly} />
          </div>
          <div className="bg-white bg-opacity-30 p-4 rounded-lg ">
            <InfoPanel />
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default App;
