import { Language } from "../../languages";
import "./attempt.css";

interface AttemptProps {
  languages: Language[];
  wrongGuessCount: number;
}

const Attempt: React.FC<AttemptProps> = ({ languages, wrongGuessCount }) => {
  const languagesElements = languages.map((language, index) => {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };

    const isLanguageLost = index < wrongGuessCount;

    return (
      <div
        key={language.name}
        className={`language ${isLanguageLost ? "lost" : ""}`}
        style={styles}
      >
        {language.name}
      </div>
    );
  });

  return <section className="languages">{languagesElements}</section>;
};

export default Attempt;
