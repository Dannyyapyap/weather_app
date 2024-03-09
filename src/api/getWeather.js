// Weather data API to retrieve current weather condition of any location in the world
// https://openweathermap.org/current

// Assumption: 
// 1) Lat and Lon will be defaulted to Singapore Geographical location if not specified or detected

import { API_URL_CURRENT_WEATHER, API_TOKEN } from "utils/connections";

export async function getWeather(lat = 1.2899175, lon = 103.8519072) {

  let searchParam = `?lat=${lat}&lon=${lon}&units=metric`;
  let apiKey = `&appid=${API_TOKEN}`;

  let url = API_URL_CURRENT_WEATHER + searchParam + apiKey;

  await fetch(url, { method: "GET" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error with network, please try again.");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
    });
}
