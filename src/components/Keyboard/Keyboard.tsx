import "./keyboard.css";

interface KeyboardProps {
  currentWord: string;
  guessedLetters: string[];
  onGuessLetter: (letter: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({
  currentWord,
  guessedLetters,
  onGuessLetter,
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
      >
        {letter}
      </button>
    );
  });

  return <section className="keyboard">{alphabetElements}</section>;
};

export default Keyboard;
