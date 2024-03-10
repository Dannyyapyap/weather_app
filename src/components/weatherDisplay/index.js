import "./index.css";
import cloudImg from "../../assets/cloud.png";
import sunImg from "../../assets/sun.png";
import { useSelector } from "react-redux";
import TruncOneDecimalPt from "../../utils/truncate";
import EpochConverter from "../../utils/epochConverter";
import Spinner from "../animations";

export default function WeatherDisplay() {
  // State has not been loaded after the screen is shown, need loading animation
  const currentTemp = useSelector((state) => state.currentTemp);
  if (currentTemp.length <= 0) {
    return (
      <>
        <div className="currentWeatherTemp">
          <span style={{ fontWeight: 700 }}>Today's Weather</span>
          <h1>
            <Spinner />
          </h1>
        </div>
      </>
    );
  } else {
    const [current_temp, max_temp, min_temp] = TruncOneDecimalPt(
      currentTemp.main.temp,
      currentTemp.main.temp_max,
      currentTemp.main.temp_min
    );
    const location = `${currentTemp.name}, ${currentTemp.sys.country}`;
    const date_generated = EpochConverter(currentTemp.dt);
    const weatherCondition = currentTemp.weather[0].main;

    return (
      <>
        <div className="weatherIcon">
          <img
            src={weatherCondition === "Clouds" ? cloudImg : sunImg}
            alt=""
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
        <div className="currentWeatherTemp">
          <span style={{ fontWeight: 700 }}>Today's Weather</span>
          <h1>{current_temp}°</h1>
          <span>
            H: {max_temp}° L:{min_temp}°
          </span>
          <span className="locationCurrent">{location}</span>
        </div>
        <div className="currentWeatherDetails">
          <h6>{location}</h6>
          <span>{date_generated}</span>
          <span>Humidity: {currentTemp.main.humidity}%</span>
          <span>{weatherCondition}</span>
        </div>
      </>
    );
  }
}
