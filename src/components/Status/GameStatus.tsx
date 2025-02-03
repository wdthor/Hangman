import "./game-status.css";

interface GameStatusProps {
  isGameWon: boolean;
  isGameLost: boolean;
  isGameOver: boolean;
  isLastGuessedLetterIncorrect: boolean;
  farewellLanguage: string;
}
const GameStatus: React.FC<GameStatusProps> = ({
  isGameWon,
  isGameLost,
  isGameOver,
  isLastGuessedLetterIncorrect,
  farewellLanguage,
}) => {
  const gameWonClass = isGameWon ? " won-status" : "";
  const gameLostClass = isGameLost ? " lost-status" : "";
  const isFarewellClass =
    !isGameOver && isLastGuessedLetterIncorrect ? " farewell-status" : "";

  const classNames = `game-status${gameWonClass}${gameLostClass}${isFarewellClass}`;

  function renderGameStatus() {
    if (!isGameOver && isLastGuessedLetterIncorrect) {
      return <h2>{farewellLanguage}</h2>;
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win !</h2>
          <p className="message">Well done ! 🎉</p>
        </>
      );
    } else if (isGameLost) {
      return (
        <>
          <h2>Game over !</h2>
          <p className="message">You lose! Better start learning Assembly 😭</p>
        </>
      );
    }
  }

  return <section className={classNames}>{renderGameStatus()}</section>;
};

export default GameStatus;
