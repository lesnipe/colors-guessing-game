import "../App.css";

function NavBar(props) {
  return (
    <header className="navbar" style={{backgroundColor: props.customBg}}>
      <p className="navbar-title">{props.rgb}</p>
      <p className="navbar-text">Choose the correct color:</p>
    </header>
  );
}

export default NavBar;
