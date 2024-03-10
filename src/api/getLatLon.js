// Geocoding API to retrieve geographical coordinate (Lat, Lon)
// Can retrieve via Country, City or Location.
// e.g. Singapore or Pasir Ris
// Ref: https://openweathermap.org/api/geocoding-api

// Assumption: 
// 1) If user did not allow for tracking of location on browser, the default will be Singapore
// 2) API call will obtain lat and lon of Singapore by default
// 3) Limit will be set to 1 to display only 1 related search result 

import { API_URL_LAT_LON, API_TOKEN } from "../utils/connection";
import Swal from "sweetalert2";

export function getLatLon(country = "Singapore") {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    const searchParam = `?q=${country}&limit=1`;
    const apiKey = `&appid=${API_TOKEN}`;
    const url = API_URL_LAT_LON + searchParam + apiKey;

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          try {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (error) {
            reject(new Error("Error parsing response data."));
            Swal.fire({
              icon: "error",
              text: error,
            });
          }
        } else {
          reject(new Error("Error with network, please try again."));
          Swal.fire({
            icon: "error",
            text: "Error with network, please try again.",
          });
        }
      }
    };

    xhr.onerror = function () {
      reject(new Error("Error with network, please try again."));
      Swal.fire({
        icon: "error",
        text: "Error with network, please try again.",
      });
    };

    xhr.open("GET", url);
    xhr.send();
  });
}