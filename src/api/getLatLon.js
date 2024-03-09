// Geocoding API to retrieve geographical coordinate (Lat, Lon)
// Can retrieve via Country, City or Location.
// e.g. Singapore or Pasir Ris
// Ref: https://openweathermap.org/api/geocoding-api

// Assumption: 
// 1) If user did not allow for tracking of location on browser, the default will be Singapore
// 2) API call will obtain lat and lon of Singapore by default
// 3) Limit will be set to 1 to display only 1 related search result 

import { API_URL_LAT_LON, API_TOKEN } from "utils/connections";

export async function getLatLon(country = "Singapore") {

  let searchParam = `?q=${country}&limit=1`;
  let apiKey = `&appid=${API_TOKEN}`;

  let url = API_URL_LAT_LON + searchParam + apiKey;

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
