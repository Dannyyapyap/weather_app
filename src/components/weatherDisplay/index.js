import "./index.css"
import cloudImg from "../../assets/cloud.png";
import sunImg from "../../assets/sun.png";

export default function WeatherDisplay() {
  return (
    <>
      <div className="weather-icon">
        <img
          src={sunImg}
          alt=""
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
      <div className="current-weather-temp">
        <span>Today's Weather</span>
        <h1>26°</h1>
        <span>H: 29° L:26°</span>
        <span className="location-current">Johor, MY</span>
      </div>
      <div className="current-weather-details">
        <h6>Johor, MY</h6>
        <span>01-09-2022 09:41am</span>
        <span>Humidity: 58%</span>
        <span>Clouds</span>
      </div>
    </>
  );
}
