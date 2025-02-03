import { useState } from "react";
import Attempt from "./Attempt/Attempt";
import Header from "./Header/Header";
import Keyboard from "./Keyboard/Keyboard";
import GameStatus from "./Status/GameStatus";
import Word from "./Word/Word";
import "./app.css";
import { languages } from "../languages";
import { getFarewellText } from "../utils";

function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  function handleGuessedLetter(letter: string) {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
    }
  }

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const farewellLanguage =
    wrongGuessCount > 0 && wrongGuessCount < currentWord.length
      ? getFarewellText(languages[wrongGuessCount - 1].name)
      : "";

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameLost || isGameWon;

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessedLetterIncorrect =
    !!lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  return (
    <>
      <Header />
      <GameStatus
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        isLastGuessedLetterIncorrect={isLastGuessedLetterIncorrect}
        farewellLanguage={farewellLanguage}
      />
      <Attempt languages={languages} wrongGuessCount={wrongGuessCount} />
      <Word currentWord={currentWord} guessedLetters={guessedLetters} />
      <Keyboard
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        onGuessLetter={handleGuessedLetter}
        isGameOver={isGameOver}
      />
      {isGameOver && <button className="new-game">New Game</button>}
    </>
  );
}

export default App;
