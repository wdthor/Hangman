import "./keyboard.css";

const Keyboard = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetList = alphabet.split("");
  const alphabetElements = alphabetList.map((letter) => (
    <button key={letter}>{letter}</button>
  ));
  return <section className="keyboard">{alphabetElements}</section>;
};

export default Keyboard;
