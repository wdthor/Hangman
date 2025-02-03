import Attempt from "./Attempt/Attempt";
import Header from "./Header/Header";
import Keyboard from "./Keyboard/Keyboard";
import GameStatus from "./Status/GameStatus";
import Word from "./Word/Word";
import "./app.css";

function App() {
  return (
    <>
      <Header />
      <GameStatus />
      <Attempt />
      <Word />
      <Keyboard />
      <button className="new-game">New Game</button>
    </>
  );
}

export default App;
