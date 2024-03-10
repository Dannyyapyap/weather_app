import "./index.css";
import cloudImg from "../../assets/cloud.png";
import sunImg from "../../assets/sun.png";
import TruncOneDecimalPt from "../../utils/truncate";
import EpochConverter from "../../utils/epochConverter";
import res from "../../utils/sampleRes.json";

export default function WeatherDisplay() {
  const sampleRes = res.current_display[0];

  const [current_temp, max_temp, min_temp] = TruncOneDecimalPt(
    sampleRes.main.temp,
    sampleRes.main.temp_max,
    sampleRes.main.temp_min
  );
  const location = `${sampleRes.name}, ${sampleRes.sys.country}`
  const date_generated = EpochConverter(sampleRes.dt)
  const weatherCondition = sampleRes.weather[0].main

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
        <span style={{fontWeight: 700}}>Today's Weather</span>
        <h1>{current_temp}°</h1>
        <span>H: {max_temp}° L:{min_temp}°</span>
      <span className="locationCurrent">{location}</span>
      </div>
      <div className="currentWeatherDetails">
        <h6>{location}</h6>
        <span>{date_generated}</span>
        <span>Humidity: {sampleRes.main.humidity}%</span>
        <span>{weatherCondition}</span>
      </div>
    </>
  );
}
