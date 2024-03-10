import { SquareBtn } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../animations"

export default function ThemeBtn({ isLoading, onClick }) {
    return (
      <SquareBtn
        disabled={isLoading}
        onClick={onClick}
      >
        {isLoading ? <Spinner /> : <FontAwesomeIcon icon={faCircleHalfStroke} />}
      </SquareBtn>
    );
  }