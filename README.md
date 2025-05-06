
# Weather App

A full-stack weather forecast application built with the MERN stack: MongoDB, Express, React, and Node.js. It uses Tailwind CSS for styling and Vite for fast frontend development. The app detects your location or lets you choose a city, shows current weather and hourly forecasts, and stores historical weather data in MongoDB.

## Tech Stack

Frontend

* React
* Vite
* Tailwind CSS
* React Icons

Backend

* Node.js
* Express

Database

* MongoDB

APIs

* WeatherAPI.com – for weather data
* BigDataCloud – for geolocation detection

## Clone the Repository

Run the following commands in your terminal:

git clone [https://github.com/yourusername/weather-app.git](https://github.com/yourusername/weather-app.git)
cd weather-app

## Install Dependencies

For the backend:

cd backend
npm install

For the frontend:

cd ../frontend
npm install

## Environment Variables

Create a .env file inside the backend folder with the following:

PORT=5000
MONGODB\_URI=your\_mongodb\_connection\_string
WEATHER\_API\_KEY=your\_weatherapi\_key

## Run the Application

Start the backend server:

cd backend
npm start

Start the frontend server in another terminal:

cd frontend
npm run dev

The frontend will run on [http://localhost:5173](http://localhost:5173) and the backend on [http://localhost:5000](http://localhost:5000)

## Features

* Location-based city detection
* City selector
* Current temperature, feels-like value, weather description, and icon
* Toggle between today and tomorrow forecasts
* Hourly forecast display

## Testing Locally

1. Clone the repository and set up both backend and frontend
2. Add correct values to both .env files
3. Start the backend and frontend servers
4. Open your browser and go to [http://localhost:5173](http://localhost:5173)
5. Test by selecting different cities and toggling forecast days



