import "./index.css";
import { SearchbarMain } from "../../components/searchbar";
import WeatherDashboard from "../../components/weatherDashboard";

document.title = "Today's Weather";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <SearchbarMain />
      <WeatherDashboard />
    </div>
  );
}
