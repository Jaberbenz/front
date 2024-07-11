import { ChangeEvent, FunctionComponent, useState } from "react";
import styles from "./Buttons.module.css";

interface ButtonsProps {
  cardType?: string;
  text?: string; // text button
  src?: string; // image source
  state?: boolean; // couleur bouton
  onLanguageSelect?: (language: string) => void; // callback pour la sélection du langage
  onFileUpload?: (file: File) => void; // callback pour le téléversement de fichier
  onSubmit?: () => void; // callback pour la soumission du formulaire
}

const Buttons: FunctionComponent<ButtonsProps> = ({
  cardType,
  text,
  src,
  state,
  onLanguageSelect,
  onFileUpload,
  onSubmit,
}) => {
  const languages = ["Java", "Javascript", "Python", "PHP"];

  const [selectedLanguage, setSelectedLanguage] = useState(
    languages ? languages[0] : ""
  );
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    if (onLanguageSelect) {
      onLanguageSelect(e.target.value);
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      // Types MIME autorisés pour les fichiers d'archive
      const allowedMimeTypes = [
        "application/zip",
        "application/x-zip-compressed",
        "application/x-rar-compressed",
        "application/x-tar",
        "application/x-7z-compressed",
      ];

      if (allowedMimeTypes.includes(file.type)) {
        if (onFileUpload) {
          onFileUpload(file);
        }
      } else {
        alert("Please upload a ZIP file.");
      }
    }
  };

  let cardContent;
  switch (cardType) {
    case "logo-text":
      cardContent = (
        <button className={state ? styles.button_up : styles.button_down}>
          <div className={styles.textContainer}>
            <img className={styles.icon} loading="lazy" alt="" src={src} />
            <div className={styles.cta}>{text}</div>
          </div>
        </button>
      );
      break;
    case "logo":
      cardContent = (
        <button className={state ? styles.button_up : styles.button_down}>
          <img className={styles.icon} loading="lazy" alt="" src={src} />
        </button>
      );
      break;
    case "dropdown":
      cardContent = (
        <div className={state ? styles.dropdown_up : styles.dropdown_down}>
          <select
            value={selectedLanguage}
            onChange={handleChange}
            className={styles.dropdownSelect}
          >
            {languages &&
              languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
          </select>
        </div>
      );
      break;
    case "upload-zip":
      cardContent = (
        <button className={state ? styles.button_up : styles.button_down}>
          <label className={styles.textContainer}>
            {text}
            <input
              type="file"
              name="file"
              accept=".zip,.rar,.tar,.7z"
              onChange={handleFileUpload}
              className={styles.uploadInput}
            />
          </label>
        </button>
      );
      break;
    case "submit":
      cardContent = (
        <button
          className={state ? styles.button_up : styles.button_down}
          onClick={onSubmit}
        >
          <div className={styles.textContainer}>
            <div className={styles.cta}>{text}</div>
          </div>
        </button>
      );
      break;
    case "submit-project":
      cardContent = (
        <button
          className={state ? styles.button_up : styles.button_down}
          onClick={onSubmit}
        >
          <div className={styles.textContainer}>
            <div className={styles.cta}>{text}</div>
          </div>
        </button>
      );
      break;
    default:
      cardContent = (
        <button className={state ? styles.button_up : styles.button_down}>
          <div className={styles.textContainer}>
            <div className={styles.cta}>{text}</div>
          </div>
        </button>
      );
  }
  return cardContent;
};

export default Buttons;
