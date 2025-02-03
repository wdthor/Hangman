import { useState } from "react";
import "./word.css";
const Word = () => {
  const [currentWord, setCurrentWord] = useState("react");
  const letters = currentWord.split("");

  const letterElements = letters.map((letter, index) => (
    <span key={index} className="letter">
      {letter}
    </span>
  ));
  return <section className="word">{letterElements}</section>;
};

export default Word;
