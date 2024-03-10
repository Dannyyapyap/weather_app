import "./index.css";
import { SearchbarControl } from "../../components/searchbarControl";
import WeatherDashboard from "../../components/weatherDashboard";

document.title = "Today's Weather";

export default function Dashboard() {
  return (
    <div className="dashboardContainer">
      <SearchbarControl />
      <WeatherDashboard />
    </div>
  );
}
