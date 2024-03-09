import "./index.css";
import HistoryRecord from "../historyRecord";
import res from "../../utils/sampleRes.json";

export default function HistoryDisplay() {
  const sampleRes = res.results;

  return (
    <div className="historyDisplay-container">
      Search History
      {sampleRes.map((item, key) => {
        return (
          <div key={key}>
            <HistoryRecord
              name={item.name}
              country={item.sys.country}
              dt={item.dt}
            />
          </div>
        );
      })}
    </div>
  );
}
