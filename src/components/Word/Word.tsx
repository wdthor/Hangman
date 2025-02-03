import "./word.css";

interface WordProps {
  currentWord: string;
  guessedLetters: string[];
}
const Word: React.FC<WordProps> = ({ currentWord, guessedLetters }) => {
  const letters = currentWord.split("");

  const letterElements = letters.map((letter, index) => {
    const foundLetter = guessedLetters.includes(letter);
    return (
      <span key={index} className="letter">
        {foundLetter ? letter : ""}
      </span>
    );
  });
  return <section className="word">{letterElements}</section>;
};

export default Word;
