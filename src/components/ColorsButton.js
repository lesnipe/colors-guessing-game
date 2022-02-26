function ColorsButton(props) {

    const checkAnswer = (button) => {
        if(props.correctAnswer === button.target.style.backgroundColor){
            console.log("Grats!");
        }
        else{
            button.target.style.visibility = "hidden";
        }
    }

  return (
    <div className="colors-button-div" id={props.id}>
      <button className="colors-button" style={{backgroundColor: props.bgColor}} onClick={checkAnswer}>
          {props.id}
      </button>
    </div>
  );
}

export default ColorsButton;
