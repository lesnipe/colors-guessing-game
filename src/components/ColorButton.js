import css from "./ColorButton.module.css";

function ColorButton(props) {
  const checkAnswer = (button) => {
    if (!props.wonGame) {
      if (props.correctAnswer === button.target.style.backgroundColor) {
        props.setWonGame(true);
      } else {
        props.setWonGame(false);
        button.target.style.visibility = "hidden";
      }
    }
  };

  return (
    <div
      className={css.colorBtn}
      style={{
        backgroundColor: props.wonGame ? props.correctAnswer : props.bgColor,
        visibility: props.atLeastOneHidden && "visible",
      }}
      onClick={checkAnswer}
    ></div>
  );
}

export default ColorButton;
