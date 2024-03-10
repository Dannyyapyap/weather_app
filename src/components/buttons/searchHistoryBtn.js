import { RoundBtn } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../animations"

export default function SearchHistoryBtn({ isLoading, onClick }) {
    return (
      <RoundBtn
        disabled={isLoading}
        onClick={onClick}
      >
        {isLoading ? <Spinner /> : <FontAwesomeIcon icon={faMagnifyingGlass} />}
      </RoundBtn>
    );
  }