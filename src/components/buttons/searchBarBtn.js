import { SquareBtn } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../animations"

export default function SearchBarBtn({ isLoading, isFieldEmpty, onClick }) {
    return (
      <SquareBtn
        disabled={isLoading || isFieldEmpty}
        onClick={onClick}
      >
        {isLoading ? <Spinner /> : <FontAwesomeIcon icon={faMagnifyingGlass} />}
      </SquareBtn>
    );
  }