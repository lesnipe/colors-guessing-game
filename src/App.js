import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import PlayAgainButton from "./components/PlayAgainButton";

function App() {
  // Generates a rgb value
  const generatePastelColor = () => {
    let R = Math.floor(Math.random() * 127 + 127);
    let G = Math.floor(Math.random() * 127 + 127);
    let B = Math.floor(Math.random() * 127 + 127);
    return "rgb(" + R + ", " + G + ", " + B + ")";
  };

  // Generates object with correct answer and all rgb values
  const getColors = () => {
    let colors = [];
    for (let i = 0; i < 4; i++) {
      colors.push(generatePastelColor());
    }
    return {
      correctAnswer: colors.at(Math.random() * 3),
      values: colors,
    };
  };

  const [wonGame, setWonGame] = useState(false);
  const [allColors, setAllColors] = useState(getColors);

  const correctAnswer = allColors.correctAnswer;

  return (
    <div className="App">
      {wonGame ? (
        <NavBar
          wonGame={wonGame}
          rgb={correctAnswer}
          customBg={correctAnswer}
        />
      ) : (
        <NavBar wonGame={wonGame} rgb={correctAnswer} customBg="rgb(0,0,0)" />
      )}
      {wonGame ? (
        <Card setWonGame={setWonGame} allColors={allColors} />
      ) : (
        <Card setWonGame={setWonGame} allColors={allColors} />
      )}
      {wonGame ? (
        <PlayAgainButton
          setWonGame={setWonGame}
          setAllColors={setAllColors}
          customBg={allColors.correctAnswer}
        />
      ) : null}
    </div>
  );
}

export default App;
