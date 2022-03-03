function PlayAgainButton(props) {

  return (
    <button
      className="play-again-btn"
      style={{ backgroundColor: props.customBg, color: "black" }}
      onClick={props.onClick}
    >
      Play again
    </button>
  );
}

export default PlayAgainButton;
