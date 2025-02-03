import { languages } from "../../languages";
import "./attempt.css";

const Attempt = () => {
  const languagesElements = languages.map((language) => {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };

    return (
      <div key={language.name} className="language" style={styles}>
        {language.name}
      </div>
    );
  });

  return <section className="languages">{languagesElements}</section>;
};

export default Attempt;
