import "./index.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCurrentTemp, deleteHistoryRecord } from "../../store/action";
import { GetWeather } from "../../api/getWeather";
import SearchHistoryBtn from "../buttons/searchHistoryBtn";
import DeleteHistoryBtn from "../buttons/deleteHistoryBtn";
import EpochConverter from "../../utils/epochConverter";

export default function HistoryRecord({ name, country, dt, lat, lon }) {
  const [isSearchHistory, setIsSearchHistory] = useState(false);
  const [isDeleteHistory, setIsDeleteHistory] = useState(false);
  const dispatch = useDispatch();

  async function handleClick() {
    try {
      setIsSearchHistory(true);
      let current_temp = await GetWeather(lat, lon);
      dispatch(addCurrentTemp(current_temp));
    } catch (err) {
      setIsSearchHistory(false);
    }
    setIsSearchHistory(false);
  }

  function handleDelete() {
    setIsDeleteHistory(true)
    dispatch(deleteHistoryRecord(dt));
    setIsDeleteHistory(false)
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
