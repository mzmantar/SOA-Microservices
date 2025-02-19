const axios = require("axios");

const API_KEY = "API_KEY";
const CITY = "Sousse";
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${CITY}&units=metric&lang=fr`;

async function getWeatherData() {
  try {
    const response = await axios.get(BASE_URL);
    const data = response.data;

    console.log(`Météo à ${CITY} :`);
    console.log(`Description : ${data.weather[0].description}`);
    console.log(`empérature : ${data.main.temp}°C`);
    console.log(`Humidité : ${data.main.humidity}%`);
  } catch (error) {
    console.error("Erreur :", error);
  }
}

getWeatherData();
