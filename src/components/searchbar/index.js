import "./index.css";
import { useState, useEffect } from "react";
import { GetLatLon } from "../../api/getLatLon";
import { GetWeather } from "../../api/getWeather";
import { useDispatch } from "react-redux";
import { addCurrentTemp } from "../../store/action";
import { addHistoryRecord } from "../../store/action";
import SearchBarBtn from "../buttons/searchBarBtn";
import Swal from "sweetalert2";

function SearchbarMain() {
  const [isSearch, setIsSearch] = useState(false);
  const [isFieldEmpty, setIsFieldEmpty] = useState(true);
  const [fieldData, setFieldData] = useState("");
  const dispatch = useDispatch();

  // Prevent user from submitting empty request with no input field
  useEffect(() => {
    if (fieldData) {
      setIsFieldEmpty(false);
    } else {
      setIsFieldEmpty(true);
    }
  }, [isFieldEmpty, fieldData]);

  function handleChange(e) {
    setFieldData(e);
  }

  async function handleClick() {
    // API call will return empty array when result is not found
    // Have to create conditional check to validate response
    let geo_data = [];
    let current_temp = "";
    setIsSearch(true);
    try {
      geo_data = await GetLatLon(fieldData);
    } catch (err) {
      setIsSearch(false);
    }

    if (geo_data.length <= 0) {
      // I have to throw an error alert here as invalid search result still returns empty array instead of error messages
      Swal.fire({
        icon: "error",
        text: "No search result found. Please try again.",
      });
    } else {
      try {
        current_temp = await GetWeather(geo_data[0].lat, geo_data[0].lon);
        dispatch(addCurrentTemp(current_temp)); // Replace existing data that is shown on screen
        dispatch(addHistoryRecord(current_temp)); // Save retrieve data to history log
      } catch (err) {
        setIsSearch(false);
      }
    }
    setIsSearch(false);
  }

  return (
    <div className="searchBarContainer">
      <div className="searchBarInput">
        <a>City or Location</a>
        <input
          placeholder="Search current weather"
          id="search-query"
          onChange={(e) => handleChange(e.target.value)}
        ></input>{" "}
      </div>

      <SearchBarBtn
        isLoading={isSearch}
        isFieldEmpty={isFieldEmpty}
        onClick={handleClick}
      />
    </div>
  );
}

export { SearchbarMain };
