function PlayAgainButton(props) {
  return (
    <button
      className="play-again-btn"
      style={{ backgroundColor: props.customBg, color: "black" }}
    >
      Play again
    </button>
  );
}

export default PlayAgainButton;
