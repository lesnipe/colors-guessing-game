import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import PlayAgainButton from "./components/PlayAgainButton";

function App() {
  const [wonGame, setWonGame] = useState(false);
  // const [playAgain, setPlayAgain] = useState(false);

  // Generates a rgb value
  const generatePastelColor = () => {
    let R = Math.floor(Math.random() * 127 + 127);
    let G = Math.floor(Math.random() * 127 + 127);
    let B = Math.floor(Math.random() * 127 + 127);
    return "rgb(" + R + ", " + G + ", " + B + ")";
  };

  // Generates map of all rgb values
  const getColors = () => {
    let colors = [];
    for (let i = 0; i < 4; i++) {
      colors.push(generatePastelColor());
    }
    let allColors = {
      correctAnswer: colors.at(Math.random() * 3),
      values: colors,
    };
    return allColors;
  };

  let allColors = getColors();
  let correctAnswer = allColors.correctAnswer;

  return (
    <div className="App">
      {wonGame ? (
        <NavBar rgb={correctAnswer} customBg={correctAnswer} />
      ) : (
        <NavBar rgb={correctAnswer} customBg="rgb(0,0,0)" />
      )}
      {wonGame ? null : <Card setWonGame={setWonGame} allColors={allColors} />}
      {/* {wonGame ? <PlayAgainButton customBg={allColors.correctAnswer} /> : null} */}
      {/* <Card setWonGame={setWonGame} allColors={allColors} correctAnswer={correctAnswer} /> */}
    </div>
  );
}

export default App;
