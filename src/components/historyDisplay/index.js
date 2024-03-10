import "./index.css";
import HistoryRecord from "../historyRecord";
import res from "../../utils/sampleRes.json";

export default function HistoryDisplay() {

  // CODE TO RETRIEVE STATE FROM STORE, REPLACE RES.CURRENT_TEMP
  const sampleRes = res.current_temp;

  return (
    <div className="historyDisplayContainer">
      Search History
      {sampleRes.map((item, key) => {
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
      })}
    </div>
  );
}
