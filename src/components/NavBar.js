import "../App.css";

function NavBar(props) {
  return (
    <header className="navbar" style={{ backgroundColor: props.customBg }}>
      {props.wonGame ? (
        <p className="navbar-title" style={{ color: "black" }}>
          {props.rgb}
        </p>
      ) : (
        <p className="navbar-title" style={{ color: "white" }}>
          {props.rgb}
        </p>
      )}
      {props.wonGame ? (
        <p className="navbar-text" style={{ color: "black" }}>
          Congratulations!
        </p>
      ) : (
        <p className="navbar-text" style={{ color: "white" }}>
          Choose the correct color:
        </p>
      )}
    </header>
  );
}

export default NavBar;
