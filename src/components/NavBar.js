import { useEffect } from "react";
import css from "./NavBar.module.css";
import NavBarDifficulties from "./NavBarDifficulties";

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
        {props.wonGame ? "Congratulations!" : props.rgb}
      </p>
      <p
        className={css.navbarText}
        style={{
          color: props.wonGame ? "black" : "white",
          fontSize: props.wonGame && 20,
        }}
      >
        {props.wonGame
          ? "Correct's color value: " + props.rgb
          : "Choose the correct color:"}
      </p>
     

        <NavBarDifficulties wonGame={props.wonGame} setDifficulty={props.setDifficulty} text="Easy" count={3}></NavBarDifficulties>
        <NavBarDifficulties wonGame={props.wonGame} setDifficulty={props.setDifficulty} text="Medium" count={6}></NavBarDifficulties>
        <NavBarDifficulties wonGame={props.wonGame} setDifficulty={props.setDifficulty} text="Hard" count={9}></NavBarDifficulties>
     
    </header>
  );
}

export default NavBar;
