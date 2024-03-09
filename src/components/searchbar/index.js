import "./index.css";
import { useState, useEffect } from "react";
import { SearchBarBtn } from "../buttons";

function SearchbarMain() {
  const [isSearch, setIsSearch] = useState(false);
  const [isFieldEmpty, setIsFieldEmpty] = useState(true)
  const [fieldData, setFieldData] = useState("")

  // Prevent user from submitting empty request with no input field
  useEffect(() => {
    if (fieldData) {
      setIsFieldEmpty(false)
    } else {
      setIsFieldEmpty(true)
    }
  }, [isFieldEmpty, fieldData]);

  function handleChange(e) {
    setFieldData(e)
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

      <SearchBarBtn isLoading={isSearch} isFieldEmpty={isFieldEmpty}/>
    </div>
  );
}

export { SearchbarMain };
