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

const HourlyForecast = ({ hourly }) => {
  const getIcon = (code) => {
    switch (code) {
      case "01d": return <WiDaySunny className="w-6 h-6 text-blue-500" />;
      case "01n": return <WiNightClear className="w-6 h-6 text-blue-500" />;
      case "02d": return <WiDayCloudy className="w-6 h-6 text-blue-500" />;
      case "02n": return <WiNightAltCloudy className="w-6 h-6 text-blue-500" />;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return <WiCloudy className="w-6 h-6 text-blue-500" />;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return <WiRain className="w-6 h-6 text-blue-500" />;
      case "11d":
      case "11n":
        return <WiThunderstorm className="w-6 h-6 text-blue-500" />;
      case "13d":
      case "13n":
        return <WiSnow className="w-6 h-6 text-blue-500" />;
      case "50d":
      case "50n":
        return <WiFog className="w-6 h-6 text-blue-500" />;
      default:
        return <WiDaySunny className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 min-h-[180px]">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Hourly Forecast</h2>
      <div className="grid grid-cols-4 gap-4 text-center text-sm text-gray-700">
        {hourly.map((hour, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span>{hour.time}</span>
            {getIcon(hour.iconCode)}
            <span>{hour.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
