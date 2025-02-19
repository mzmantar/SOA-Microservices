const request = require("request");

const API_KEY = "votre_clé_api";
const CITY = "Sousse";
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${CITY}&units=metric&lang=fr`;

function getWeatherData(callback) {
    request(BASE_URL, function (error, response, body) {
        if (error) {
            callback(error, null);
        } else {
            const weatherData = JSON.parse(body);
            callback(null, weatherData);
        }
    });
}

getWeatherData((error, data) => {
    if (error) {
        console.error("Erreur :", error);
    } else {
        console.log(`Météo à ${CITY} :`);
        console.log(`Description : ${data.weather[0].description}`);
        console.log(`Température : ${data.main.temp}°C`);
        console.log(`Humidité : ${data.main.humidity}%`);
    }
});

