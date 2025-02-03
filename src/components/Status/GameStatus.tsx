import "./game-status.css";

interface GameStatusProps {
  isGameWon: boolean;
  isGameLost: boolean;
}
const GameStatus: React.FC<GameStatusProps> = ({ isGameWon, isGameLost }) => {
  const classNames = `game-status${isGameWon ? " won-status" : ""}${
    isGameLost ? " lost-status" : ""
  }`;

  const gameWon = (
    <>
      <h2>You win !</h2>
      <p className="message">Well done ! 🎉</p>
    </>
  );
  const gameLost = (
    <>
      <h2>Game over !</h2>
      <p className="message">You lose! Better start learning Assembly 😭</p>
    </>
  );
  return (
    <section className={classNames}>
      {isGameWon ? gameWon : ""}
      {isGameLost ? gameLost : ""}
    </section>
  );
};

export default GameStatus;
