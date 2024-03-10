import "./index.css";

function SquareBtn({ children, disabled, onClick }) {
  return (
    <button
      className="squareBtn"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function RoundBtn({ children, disabled, onClick }) {
  return (
    <button
      className="roundBtn"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export {SquareBtn, RoundBtn}
