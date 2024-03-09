import "./index.css";
import WeatherDisplay from "../weatherDisplay";
import HistoryDisplay from "../historyDisplay";

export default function WeatherDashboard() {
  return (
    <div className="weatherDashboard-container">
      <WeatherDisplay />
      <HistoryDisplay/>
    </div>
  );
}