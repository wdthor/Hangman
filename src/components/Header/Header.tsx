import "./header.css";

interface HeaderProps {
  numberOfGuess: number;
}
const Header: React.FC<HeaderProps> = ({ numberOfGuess }) => {
  return (
    <header>
      <h1 className="title">Assembly: Endgame</h1>
      <p className="instructions">
        Guess the word in under {numberOfGuess} attempts to keep the programming
        world safe from Assembly !
      </p>
    </header>
  );
};

export default Header;
