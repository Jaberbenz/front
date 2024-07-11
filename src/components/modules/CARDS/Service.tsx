import { FunctionComponent } from "react";
import styles from "./Service.module.css";

export type ServiceType = {
  image?: string;
  subheading?: string;
  heading?: string;
  link?: string;
};

const Service: FunctionComponent<ServiceType> = ({
  image,
  subheading,
  heading,
  link
}) => {
  return (
    <a className={styles.cardDoc} href={link}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.contentContainer}>
          <div className={styles.content1}>
            <div className={styles.subheading}>{subheading}</div>
            <h1 className={styles.heading}>{heading}</h1>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Service;
