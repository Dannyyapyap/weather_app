import "./index.css";
import { useState } from "react";
import { getWeather } from "../../api/getWeather";
import SearchHistoryBtn from "../buttons/searchHistoryBtn";
import DeleteHistoryBtn from "../buttons/deleteHistoryBtn";
import EpochConverter from "../../utils/epochConverter";

export default function HistoryRecord({ name, country, dt, lat, lon }) {
  const [isSearchHistory, setIsSearchHistory] = useState(false);
  const [isDeleteHistory, setIsDeleteHistory] = useState(false);

  async function handleClick() {
    let current_temp = await getWeather(lat, lon);
    console.log("current temp", current_temp);
  }

  function handleDelete() {
    console.log("delete", { name }, { country }, { lat }, { lon });
  }

  return (
    <div className="historyRecordContainer">
      <div className="description">
        <span>
          {name}, {country}
        </span>
        <span className="queryTime">{EpochConverter(dt)}</span>
      </div>
      <div className="historyRecordAction">
        <SearchHistoryBtn isLoading={isSearchHistory} onClick={handleClick} />
        <DeleteHistoryBtn isLoading={isDeleteHistory} onClick={handleDelete} />
      </div>
    </div>
  );
}
