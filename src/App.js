import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

// Generates a rgb value
const generatePastelColor = () => {
  let R = Math.floor(Math.random() * 127 + 127);
  let G = Math.floor(Math.random() * 127 + 127);
  let B = Math.floor(Math.random() * 127 + 127);

  return "rgb("+R+", "+G+", "+B+")";
};

// Generates map of all rgb values
const getColors = () => {
  let allColors = [];
  for (let i = 0; i < 4; i++) {
    allColors.push(generatePastelColor());
  }
  return allColors;
};

function App() {
  let allColors = getColors();
  let correctAnswer = allColors.at(Math.random()*3);

  return (
    <div className="App">
      <NavBar rgb={correctAnswer} />
      <Card allColors={allColors} correctAnswer={correctAnswer}/>
    </div>
  );
}

export default App;
