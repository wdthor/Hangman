import "./word.css";

interface WordProps {
  currentWord: string;
  guessedLetters: string[];
  isGameLost: boolean;
}
const Word: React.FC<WordProps> = ({
  currentWord,
  guessedLetters,
  isGameLost,
}) => {
  const letters = currentWord.split("");

  const letterElements = letters.map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter);

    const letterClassNames = `letter${
      isGameLost && !guessedLetters.includes(letter) ? " missed-letter" : ""
    }`;
    return (
      <span key={index} className={letterClassNames}>
        {shouldRevealLetter ? letter : ""}
      </span>
    );
  });
  return <section className="word">{letterElements}</section>;
};

export default Word;
