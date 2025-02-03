import Attempt from "./Attempt/Attempt";
import Header from "./Header/Header";
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
    </>
  );
}

export default App;
