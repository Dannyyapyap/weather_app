import "./index.css";
import { useState } from "react";
import { SearchHistoryBtn, DeleteHistoryBtn } from "../buttons";
import EpochConverter from "../../utils/epochConverter";

export default function HistoryRecord({name, country, dt}) {
  const [isSearchHistory, setIsSearchHistory] = useState(false);
  const [isDeleteHistory, setIsDeleteHistory] = useState(false);
  return (
    <div className="historyRecordContainer">
      <div className="description">
        <span>
          {name}, {country}
        </span>
        <span className="queryTime">{EpochConverter(dt)}</span>
      </div>
      <div className="historyRecordAction">
        <SearchHistoryBtn isLoading={isSearchHistory} />
        <DeleteHistoryBtn isLoading={isDeleteHistory} />
      </div>
    </div>
  );
}
