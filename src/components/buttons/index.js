import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/animations";

function SearchBarBtn({isLoading, isFieldEmpty}) {
  return (
    <button className="searchBarBtn" disabled={isLoading || isFieldEmpty}>
      {isLoading ? (
        <Spinner />
      ) : (
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
        />
      )}
    </button>
  );
}

function SearchHistoryBtn({isLoading}) {
  return (
    <button className="historyActionButton" disabled={isLoading}>
      {isLoading ? (
        <Spinner />
      ) : (
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
        />
      )}
    </button>
  );
}

function DeleteHistoryBtn({isLoading}) {
  return (
    <button className="historyActionButton" disabled={isLoading}>
      {isLoading ? (
        <Spinner />
      ) : (
        <FontAwesomeIcon
          icon={faTrash}
        />
      )}
    </button>
  );
}

export { SearchBarBtn, SearchHistoryBtn, DeleteHistoryBtn };
