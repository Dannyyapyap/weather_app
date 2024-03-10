import "./index.css";
import { useState, useEffect } from "react";
import { getLatLon } from "../../api/getLatLon";
import { getWeather } from "../../api/getWeather";
import SearchBarBtn from "../buttons/searchBarBtn";
import Swal from "sweetalert2";

function SearchbarMain() {
  const [isSearch, setIsSearch] = useState(false);
  const [isFieldEmpty, setIsFieldEmpty] = useState(true);
  const [fieldData, setFieldData] = useState("");

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
    setIsSearch(true);
    // API call will return empty array when result is not found
    // Have to create conditional check to validate response
    let geo_data = [];
    let current_temp = "";
    geo_data = await getLatLon(fieldData);

    if (geo_data.length <= 0) {
      // I have to throw an error alert here as invalid search result still returns empty array instead of error messages
      Swal.fire({
        icon: "error",
        text: "No search result found. Please try again.",
      });
    } else {
      current_temp = await getWeather(geo_data[0].lat, geo_data[0].lon);

      console.log("current temp", current_temp);
      if (current_temp.cod !== "400") {
        // UPDATE TO STORE IN PERSISTENT STATE

      }
    }
    setIsSearch(false);
  }

  return (
    <div className="searchBarContainer">
      <div className="searchBarInput">
        <a>Country, City or Location</a>
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
