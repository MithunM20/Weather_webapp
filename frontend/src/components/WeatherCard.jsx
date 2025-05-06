import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

const WeatherCard = ({
  weather,
  selectedDay,
  cities,
  city,
  setCity,
  setSelectedDay,
}) => {
  
  const getIcon = (code) => {
    switch (code) {
      case "01d": return <WiDaySunny className="w-20 h-20 text-orange-500" />;
      case "01n": return <WiNightClear className="w-20 h-20 text-orange-500" />;
      case "02d": return <WiDayCloudy className="w-20 h-20 text-orange-500" />;
      case "02n": return <WiNightAltCloudy className="w-20 h-20 text-orange-500" />;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return <WiCloudy className="w-20 h-20 text-orange-500" />;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return <WiRain className="w-20 h-20 text-orange-500" />;
      case "11d":
      case "11n":
        return <WiThunderstorm className="w-20 h-20 text-orange-500" />;
      case "13d":
      case "13n":
        return <WiSnow className="w-20 h-20 text-orange-500" />;
      case "50d":
      case "50n":
        return <WiFog className="w-20 h-20 text-orange-500" />;
      default:
        return <WiDaySunny className="w-20 h-20 text-orange-500" />;
    }
  };

  const date = new Date().toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-orange-100 p-8 rounded-3xl shadow-lg w-full min-h-[420px]">
      <div className="flex justify-between mb-4">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded bg-white/80 text-sm"
        >
          {cities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <div className="space-x-2">
          <button
            className={`px-3 py-1 text-sm rounded ${
              selectedDay === "Today" ? "bg-blue-400 text-white" : "bg-white/80"
            }`}
            onClick={() => setSelectedDay("Today")}
          >
            Today
          </button>
          <button
            className={`px-3 py-1 text-sm rounded ${
              selectedDay === "Tomorrow"
                ? "bg-blue-400 text-white"
                : "bg-white/80"
            }`}
            onClick={() => setSelectedDay("Tomorrow")}
          >
            Tomorrow
          </button>
        </div>
      </div>

      <div className="flex item-center space-x-4">
        {getIcon(weather.iconCode)}
        <h1 className="text-6xl font-bold text-orange-500">
          {Math.round(weather.temp)}°
        </h1>
      </div>
      <p className="text-lg mt-2 capitalize text-orange-600">
        {weather.description}
      </p>
      <p className="text-sm text-gray-700">{weather.city}</p>
      <p className="text-sm text-gray-700">{date}</p>
      <div className="mt-4 text-sm text-gray-600">
        Feels like {Math.round(weather.feelsLike)}° | Sunset{" "}
        {new Date(weather.sunset * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
};

export default WeatherCard;
