import "./keyboard.css";

interface KeyboardProps {
  currentWord: string;
  guessedLetters: string[];
  onGuessLetter: (letter: string) => void;
  isGameOver: boolean;
}

const Keyboard: React.FC<KeyboardProps> = ({
  currentWord,
  guessedLetters,
  onGuessLetter,
  isGameOver,
}) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetList = alphabet.split("");

  const alphabetElements = alphabetList.map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const buttonClassNames = `${isCorrect ? "correct" : ""}${
      isWrong ? "wrong" : ""
    }`;

    return (
      <button
        key={letter}
        className={buttonClassNames}
        onClick={() => onGuessLetter(letter)}
        disabled={isGameOver || guessedLetters.includes(letter)}
        aria-disabled={isGameOver || guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
      >
        {letter}
      </button>
    );
  });

  return <section className="keyboard">{alphabetElements}</section>;
};

export default Keyboard;
