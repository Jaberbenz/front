import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Profile.module.css";

export type CARDProfileType = {
  cardType?: string;
  image?: string;
  name?: string;
  jobTitle?: string;
};

const CARDProfile: FunctionComponent<CARDProfileType> = ({
  cardType,
  image,
  name,
  jobTitle
}) => {

  let cardContent;
  switch(cardType) {
    case "add":
      cardContent = (
        <img
          className={styles.addFrIcon1}
          loading="lazy"
          alt=""
          src="images/add-fr@2x.png"
        />
      );
      break;
    case "notxt":
      cardContent = (
        <div className={styles.cardProfile}>
          <div className={styles.image}>
            <img
              className={styles.imageLummiCategoryavata}
              alt=""
              src="images/image-lummi-categoryavatars@2x.png"
            />
          </div>
        </div>
      );
      break;
    default:
      cardContent = (
        <div className={styles.cardProfile}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src={image}
          />
          <div className={styles.nameParent}>
            <div className={styles.name}>{name}</div>
            <div className={styles.jobTitle}>{jobTitle}</div>
          </div>
        </div>
      );
      break;
  }
  return cardContent;
};

export default CARDProfile;
