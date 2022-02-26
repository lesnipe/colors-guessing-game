import ColorsButton from "./ColorsButton";

function Card(props) {
    
  return (
    <div className="card">
      <div className="card-row">
       <ColorsButton correctAnswer={props.correctAnswer} bgColor={props.allColors.at(0)} id="1" />
       <ColorsButton correctAnswer={props.correctAnswer} bgColor={props.allColors.at(1)} id="2" />
      </div>
      <div className="card-row">
        <ColorsButton correctAnswer={props.correctAnswer} bgColor={props.allColors.at(2)} id="3" />
        <ColorsButton correctAnswer={props.correctAnswer} bgColor={props.allColors.at(3)} id="4" />
      </div>
    </div>
  );
}

export default Card;
