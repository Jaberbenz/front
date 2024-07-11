import { FunctionComponent } from "react";
import styles from "./Documentation.module.css";

export type CARDDocType = {
  image?: string;
  subheading?: string;
  heading?: string;
  text?: string;
  href?: string;
  link?: string;
};

const CARDDoc: FunctionComponent<CARDDocType> = ({
  image,
  subheading,
  heading,
  text,
  href,
  link
}) => {
  return (
    <div className={styles.cardDoc}>
      <img 
        className={styles.imageIcon} 
        loading="lazy" 
        alt=""
        src={image} 
      />
      <div className={styles.content}>
        <div className={styles.contentContainer}>
          <div className={styles.content1}>
            <div className={styles.subheading}>{subheading}</div>
            <h1 className={styles.heading}>
              <p className={styles.heading}>
                {heading}
              </p>
            </h1>
            <div className={styles.text}>{text}</div>
          </div>
        </div>
        <div className={styles.cta}>
          <a href={href} className={styles.button}>
            <div className={styles.cta1}>{link}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CARDDoc;
