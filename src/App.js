import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import PlayAgainButton from "./components/PlayAgainButton";

function App() {
  // Get Colors Data
  const getColors = (colorsCount) => {
    const colors = [];
    for (let i = 0; i < colorsCount; i++) {
      colors.push(generatePastelColor(colorsCount));
    }
    return {
      correctAnswer: colors.at(Math.floor(Math.random() * (colorsCount - 1))),
      colorsStrings: colors,
    };
  };
  const generatePastelColor = () => {
    let R = Math.floor(Math.random() * 127 + 127);
    let G = Math.floor(Math.random() * 127 + 127);
    let B = Math.floor(Math.random() * 127 + 127);
    return "rgb(" + R + ", " + G + ", " + B + ")";
  };

  // Play again handler
  const playAgainHandler = () => {
    setAllColorsText(getColors(allColorsText.colorsStrings.length));
    setAtLeastOneHidden(true);
    setWonGame(false);
  };

  // Difficulty state setter
  const diffLevel = (count) => {
    return count;
  };

  // States
  const [playAgainPressed, setPlayAgainPressed] = useState(false);
  const [wonGame, setWonGame] = useState(false);
  const [allColorsText, setAllColorsText] = useState(getColors(6));
  const [atLeastOneHidden, setAtLeastOneHidden] = useState(false);
  const [difficulty, setDifficulty] = useState(diffLevel(6));

  // Toggle difficulty level (Easy/Normal/Hard)
  useEffect(() => {
    console.log("Difficulty: "+difficulty+",  One hidden: "+atLeastOneHidden);
    //setAtLeastOneHidden(!atLeastOneHidden);
    if(difficulty === 3)
      setAllColorsText(getColors(3));
    else if(difficulty === 6)
      setAllColorsText(getColors(6));
    else if(difficulty === 9)
      setAllColorsText(getColors(9));
    setAtLeastOneHidden(true);
    setWonGame(false);
  }, [difficulty]);

  // Toggle new game state
  useEffect(() => {
    if (wonGame) setAtLeastOneHidden(true);
    else if (!wonGame) setAtLeastOneHidden(false);
  }, [wonGame]);

  return (
    <div className="App">
      <NavBar
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        wonGame={wonGame}
        rgb={allColorsText.correctAnswer}
      />
      <Card
        atLeastOneHidden={atLeastOneHidden}
        setAtLeastOneHidden={setAtLeastOneHidden}
        wonGame={wonGame}
        playAgainPressed={playAgainPressed}
        setWonGame={setWonGame}
        allColorsText={allColorsText}
      />
      {wonGame && (
        <PlayAgainButton
          onClick={playAgainHandler}
          customBg={allColorsText.correctAnswer}
          allColorsText={allColorsText}
          getColors={getColors}
          setWonGame={setWonGame}
        />
      )}
    </div>
  );
}

export default App;
