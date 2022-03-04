import css from "./PlayAgainButton.module.css";

function PlayAgainButton(props) {
  return (
    <div className={css.playAgainDiv}>
      <button
        className={css.playAgainBtn}
        style={{ backgroundColor: props.customBg, color: "black" }}
        onClick={props.onClick}
      >
        Play again
      </button>
    </div>
  );
}

export default PlayAgainButton;
