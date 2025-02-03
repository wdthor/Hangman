import { useState } from "react";
import Attempt from "./Attempt/Attempt";
import Header from "./Header/Header";
import Keyboard from "./Keyboard/Keyboard";
import GameStatus from "./Status/GameStatus";
import Word from "./Word/Word";
import "./app.css";

function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  function handleGuessedLetter(letter: string) {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
    }
  }
  return (
    <>
      <Header />
      <GameStatus />
      <Attempt />
      <Word currentWord={currentWord} guessedLetters={guessedLetters} />
      <Keyboard
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        onGuessLetter={handleGuessedLetter}
      />
      <button className="new-game">New Game</button>
    </>
  );
}

export default App;
