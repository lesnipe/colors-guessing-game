function ColorsButton(props) {

  const hiddenButton = [];
  const checkAnswer = (button) => {
    if (props.correctAnswer === button.target.style.backgroundColor) {
      
      
      hiddenButton.forEach(element =>{
        element.style.visibility = "visible";
      });
      props.setWonGame(true);
      console.log("Hidden buttons: " + hiddenButton);
    } else {
      hiddenButton.push(button);
      props.setWonGame(false);
      button.target.style.visibility = "hidden";
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
