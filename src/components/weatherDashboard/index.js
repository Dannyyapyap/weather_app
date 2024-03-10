import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./index.css";
import WeatherDisplay from "../weatherDisplay";
import HistoryDisplay from "../historyDisplay";

import { addCurrentTemp } from "../../store/action";
import { addHistoryRecord } from "../../store/action";
import { GetWeather } from "../../api/getWeather";

export default function WeatherDashboard() {
  const [trackLocation, setTrackLocation] = useState("");
  const currentTemp = useSelector((state) => state.currentTemp);
  const historyRecord = useSelector((state) => state.historyRecords);
  const dispatch = useDispatch();

  // When first initialise, prompt user to allow tracking of location
  useEffect(() => {
    async function getCurrentWeather(lat, lon) {
      let current_temp = await GetWeather(lat, lon);
      dispatch(addCurrentTemp(current_temp));
      dispatch(addHistoryRecord(current_temp));
    }
    const successCallback = (position) => {
      setTrackLocation(position);
    };
    const errorCallback = (error) => {
      console.log(error);
    };
    if (currentTemp.length <= 0 && trackLocation) {
      // User allows tracking, no current temp (redux state) detected. Use lat and lon from user's location
      getCurrentWeather(
        trackLocation.coords.latitude,
        trackLocation.coords.longitude
      );
    } else if (currentTemp.length <= 0 && trackLocation === "") {
      // User does not allow tracking, and no current temp (redux state) detected
      // Call getWeather API with default lat and lon set for Singapore
      getCurrentWeather();
    }
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return (
    <div className="weatherDashboardContainer">
      <WeatherDisplay />
      <HistoryDisplay />
    </div>
  );
}
