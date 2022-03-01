import ColorsButton from "./ColorsButton";

function Card(props) {
  return (
    <div className="card">
      <div className="card-row">
        <ColorsButton
          playAgainPressed={props.playAgainPressed}
          setWonGame={props.setWonGame}
          correctAnswer={props.allColors.correctAnswer}
          bgColor={props.allColors.values.at(0)}
          id="1"
        />
        <ColorsButton
          playAgainPressed={props.playAgainPressed}
          setWonGame={props.setWonGame}
          correctAnswer={props.allColors.correctAnswer}
          bgColor={props.allColors.values.at(1)}
          id="2"
        />
      </div>
      <div className="card-row">
        <ColorsButton
          playAgainPressed={props.playAgainPressed}
          setWonGame={props.setWonGame}
          correctAnswer={props.allColors.correctAnswer}
          bgColor={props.allColors.values.at(2)}
          id="3"
        />
        <ColorsButton
          playAgainPressed={props.playAgainPressed}
          setWonGame={props.setWonGame}
          correctAnswer={props.allColors.correctAnswer}
          bgColor={props.allColors.values.at(3)}
          id="4"
        />
      </div>
    </div>
  );
}

export default Card;
