import { RoundBtn } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../animations"

export default function DeleteHistoryBtn({ isLoading, onClick }) {
    return (
      <RoundBtn
        disabled={isLoading}
        onClick={onClick}
      >
        {isLoading ? <Spinner /> : <FontAwesomeIcon icon={faTrash} />}
      </RoundBtn>
    );
  }