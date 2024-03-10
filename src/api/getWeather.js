// Weather data API to retrieve current weather condition of any location in the world
// https://openweathermap.org/current

// Assumption:
// 1) Lat and Lon will be defaulted to Singapore Geographical location if not specified or detected

import { API_URL_CURRENT_WEATHER, API_TOKEN } from "../utils/connection";
import Swal from "sweetalert2";

export function getWeather(lat = 1.2899175, lon = 103.8519072) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    const searchParam = `?lat=${lat}&lon=${lon}&units=metric`;
    const apiKey = `&appid=${API_TOKEN}`;
    const url = API_URL_CURRENT_WEATHER + searchParam + apiKey;

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          try {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (error) {
            Swal.fire({
              icon: "error",
              text: error,
            });
            resolve(error);
          }
        } else if (xhr.status === 400) {
          const data = JSON.parse(xhr.responseText)
          Swal.fire({
            icon: "error",
            text: data.message ? data.message : xhr.responseText,
          });
          resolve(data);
        }
      }
    };

    xhr.open("GET", url);
    xhr.send();
  });
}
