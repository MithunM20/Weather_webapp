const axios = require('axios');

const key = '4b6d7d936cb649c197b64933250605';
const city = 'Delhi';

axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)
  .then(res => console.log(res.data))
  .catch(err => console.error(err.response.data));
