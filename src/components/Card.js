import ColorsButton from "./ColorsButton";

function Card(props) {
  return (
    <div className="card">
      <div className="card-row">
        <ColorsButton
          atLeastOneHidden={props.atLeastOneHidden}
          setAtLeastOneHidden={props.setAtLeastOneHidden}
          wonGame={props.wonGame}
          playAgainPressed={props.playAgainPressed}
          setWonGame={props.setWonGame}
          correctAnswer={props.allColorsText.correctAnswer}
          bgColor={props.allColorsText.colorsStrings.at(0)}
          id="1"
        />
        <ColorsButton
          atLeastOneHidden={props.atLeastOneHidden}
          setAtLeastOneHidden={props.setAtLeastOneHidden}
          wonGame={props.wonGame}
          playAgainPressed={props.playAgainPressed}
          setWonGame={props.setWonGame}
          correctAnswer={props.allColorsText.correctAnswer}
          bgColor={props.allColorsText.colorsStrings.at(1)}
          id="2"
        />
      </div>
      <div className="card-row">
        <ColorsButton
          atLeastOneHidden={props.atLeastOneHidden}
          setAtLeastOneHidden={props.setAtLeastOneHidden}
          wonGame={props.wonGame}
          playAgainPressed={props.playAgainPressed}
          setWonGame={props.setWonGame}
          correctAnswer={props.allColorsText.correctAnswer}
          bgColor={props.allColorsText.colorsStrings.at(2)}
          id="3"
        />
        <ColorsButton
          atLeastOneHidden={props.atLeastOneHidden}
          setAtLeastOneHidden={props.setAtLeastOneHidden}
          wonGame={props.wonGame}
          playAgainPressed={props.playAgainPressed}
          setWonGame={props.setWonGame}
          correctAnswer={props.allColorsText.correctAnswer}
          bgColor={props.allColorsText.colorsStrings.at(3)}
          id="4"
        />
      </div>
    </div>
  );
}

export default Card;
