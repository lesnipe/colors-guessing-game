import css from "./NavBar.module.css";

function NavBar(props) {
  return (
    <header
      className={css.navbar}
      style={{ backgroundColor: props.wonGame ? props.rgb : "black" }}
    >
      <p
        className={css.navbarTitle}
        style={{ color: props.wonGame ? "black" : "white" }}
      >
        {props.wonGame? 'Congratulations!' : props.rgb}
      </p>
      <p
        className={css.navbarText}
        style={{ color: props.wonGame ? "black" : "white", fontSize: props.wonGame && 20 }}
      >
        {props.wonGame ? 'Correct\'s color value: ' + props.rgb : "Choose the correct color:"}
      </p>
    </header>
  );
}

export default NavBar;
