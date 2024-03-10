import "./index.css";
import HistoryRecord from "../historyRecord";
import { useSelector } from "react-redux";

export default function HistoryDisplay() {
  const historyRecord = useSelector(state => state.historyRecords)
  return (
    <div className="historyDisplayContainer">
      <span className="textInfo">Search History</span>
      {historyRecord.length >= 1 ? (
        historyRecord.toReversed().map((item, key) => {
          return (
            <div key={key}>
              <HistoryRecord
                name={item.name}
                country={item.sys.country}
                dt={item.dt}
                lat={item.coord.lat}
                lon={item.coord.lon}
              />
            </div>
          );
        })
      ) : (
        <span className="noRecord">No Record</span>
      )}
    </div>
  );
}
