import ColorButton from "./ColorButton";
import css from "./Cards.module.css";

function Card(props) {
  // Dynamic creation of N color buttons
  const colorsButtons = props.allColorsText.colorsStrings.map(
    (color, index) => {
      return (
        <ColorButton
          key={index}
          atLeastOneHidden={props.atLeastOneHidden}
          setAtLeastOneHidden={props.setAtLeastOneHidden}
          wonGame={props.wonGame}
          playAgainPressed={props.playAgainPressed}
          setWonGame={props.setWonGame}
          correctAnswer={props.allColorsText.correctAnswer}
          bgColor={color}
        />
      );
    }
  );

  return (
    <div className={css.cardsContainer}>
      <div className={css.cardsInnerContainer}>{colorsButtons}</div>
    </div>
  );
}

export default Card;
