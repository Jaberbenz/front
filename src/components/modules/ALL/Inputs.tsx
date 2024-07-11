import { ChangeEvent, FunctionComponent } from "react";
import styles from "./Inputs.module.css";

interface InputsProps {
  cardType?: string;
  text?: string;
  type?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: FunctionComponent<InputsProps> = ({
  cardType,
  text,
  type,
  value,
  onChange
}) => {
  let cardContent;
  switch (cardType) {
    case "mandatory":
      cardContent = (
        <div className={styles.inputForm}>
          <input
              className={styles.textContainer}
              placeholder={text}
              type={type}
              value={value}
              onChange={onChange}
          />
          <div className={styles.requirements}>*</div>
        </div>
      );
      break;
    default:
      cardContent= (
        <div className={styles.inputForm}>
          <input
              className={styles.textContainer}
              placeholder={text}
              type={type}
              value={value}
              onChange={onChange}
          />
        </div>
      );
  }
  return cardContent;
};

export default Inputs;