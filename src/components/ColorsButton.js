function ColorsButton(props) {

  const hiddenButton = [];
  const checkAnswer = (button) => {
    if (props.correctAnswer === button.target.style.backgroundColor) {
      props.setWonGame(true);
      hiddenButton.forEach(element =>{
        element.style.visibility = "visible";
      })
      console.log("Grats!");
    } else {
      props.setWonGame(false);
      button.target.style.visibility = "hidden";
      hiddenButton.push(button);
    }
  };

  return (
    <div className="colors-button-div" id={props.id}>
      <button
        className="colors-button"
        style={{ backgroundColor: props.bgColor }}
        onClick={checkAnswer}
      >
        {"ID: " + props.id + ", " + props.bgColor} 
      </button>
    </div>
  );
}

export default ColorsButton;
