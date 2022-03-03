import "../App.css";

function NavBar(props) {
  return (
    <header
      className="navbar"
      style={{ backgroundColor: props.wonGame ? props.rgb : "black" }}
    >
      <p
        className="navbar-title"
        style={{ color: props.wonGame ? "black" : "white" }}
      >
        {props.wonGame? 'Congratulations!' : props.rgb}
      </p>
      <p
        className="navbar-text"
        style={{ color: props.wonGame ? "black" : "white", fontSize: props.wonGame && 20 }}
      >
        {props.wonGame ? 'Correct\'s color value: ' + props.rgb : "Choose the correct color:"}
      </p>
    </header>
  );
}

export default NavBar;
