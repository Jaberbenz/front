import { FunctionComponent } from "react";
import styles from "./Help.module.css";

export type CARDHelpType = {
  subheading?: string;
  heading?: string;
  info?: string;
};

const CARDHelp: FunctionComponent<CARDHelpType> = ({
  subheading,
  heading,
  info
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.contentContainer}>
        <div className={styles.content1}>
          <div className={styles.subheading}>{subheading}</div>
          <h1 className={styles.heading}>{heading}</h1>
          <div className={styles.cta}>
            <div className={styles.button}>
              <div className={styles.cta1}>
                {info}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.arrow}>
        <img
          className={styles.unionIcon}
          loading="lazy"
          alt=""
          src="/union@2x.png"
        />
      </div>
    </div>
  );
};

export default CARDHelp;
