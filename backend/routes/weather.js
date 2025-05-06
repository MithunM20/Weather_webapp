const express = require('express');
const axios = require('axios');
const Weather = require('../models/Weather');
const router = express.Router();

router.get('/:city', async (req, res) => {
  const { city } = req.params;
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`
    );

    const weatherData = {
      city: response.data.location.name,
      temp: response.data.current.temp_c,
      feelsLike: response.data.current.feelslike_c,
      description: response.data.current.condition.text,
      icon: response.data.current.condition.icon,
      sunset: null,
    };

    await Weather.create(weatherData);

    res.json(weatherData);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});


router.get('/history', async (req, res) => {
  const { city, from, to } = req.query;
  try {
    const query = { city, date: { $gte: new Date(from), $lte: new Date(to) } };
    const historicalData = await Weather.find(query).sort({ date: -1 });
    res.json(historicalData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch historical data' });
  }
});

module.exports = router;