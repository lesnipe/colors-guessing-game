function PlayAgainButton(props) {

  const playAgainHandler = (e) => {
    props.setAllColors(props.getColors);
    props.setWonGame(false);
  };

  return (
    <button
      className="play-again-btn"
      style={{ backgroundColor: props.customBg, color: "black" }}
      onClick={playAgainHandler}
    >
      Play again
    </button>
  );
}

export default PlayAgainButton;
