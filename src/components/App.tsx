import { useState } from "react";
import Attempt from "./Attempt/Attempt";
import Header from "./Header/Header";
import Keyboard from "./Keyboard/Keyboard";
import GameStatus from "./Status/GameStatus";
import Word from "./Word/Word";
import "./app.css";
import { languages } from "../languages";
import { getFarewellText, getRandomWord } from "../utils";
import Confetti from "react-confetti";

function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  function handleGuessedLetter(letter: string) {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
    }
  }

  const numberGuessesLeft = languages.length - 1;
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const farewellLanguage =
    wrongGuessCount > 0 && wrongGuessCount < languages.length
      ? getFarewellText(languages[wrongGuessCount - 1].name)
      : "";

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameLost = wrongGuessCount >= numberGuessesLeft;
  const isGameOver = isGameLost || isGameWon;

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessedLetterIncorrect =
    !!lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <Header numberOfGuess={numberGuessesLeft} />
      <GameStatus
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        isLastGuessedLetterIncorrect={isLastGuessedLetterIncorrect}
        farewellLanguage={farewellLanguage}
      />
      <Attempt languages={languages} wrongGuessCount={wrongGuessCount} />
      <Word
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />
      <Keyboard
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        onGuessLetter={handleGuessedLetter}
        isGameOver={isGameOver}
      />

      {/* Combined visually-hidden aria-live region for status updates */}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is in the word.`
            : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
          You have {numberGuessesLeft} attempts left.
        </p>
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) =>
              guessedLetters.includes(letter) ? letter + "." : "blank"
            )
            .join(" ")}
        </p>
      </section>
      {isGameOver && (
        <button className="new-game" onClick={startNewGame}>
          New Game
        </button>
      )}
    </main>
  );
}

export default App;
