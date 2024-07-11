import { FunctionComponent } from "react";
import styles from "./FOOTER_Pres.module.css";
import Buttons from "../ALL/Buttons";
import Inputs from "../ALL/Inputs";

const FOOTER: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.list}>
          <div className={styles.listHeading}>NilCloud</div>
          <div className={styles.listLinkItem}>Platform</div>
          <div className={styles.listLinkItem1}>Join Us</div>
          <div className={styles.listLinkItem2}>Updates</div>
        </div>
        <div className={styles.list1}>
          <div className={styles.listHeading1}>Services</div>
          <div className={styles.listLinkItem3}>Zero Downtime</div>
          <div className={styles.listLinkItem4}>Scaling</div>
          <div className={styles.listLinkItem5}>Updates</div>
        </div>
        <div className={styles.list2}>
          <div className={styles.listHeading2}>Connect</div>
          <div className={styles.listLinkItem6}>@NilCloudTech</div>
          <div className={styles.listLinkItem7}>@NilCloudGram</div>
          <div className={styles.listLinkItem8}>Community</div>
        </div>
        <div className={styles.list3}>
          <div className={styles.labelAndDescription}>
            <div className={styles.listHeading3}>Tech Insights</div>
            <div className={styles.listDescription}>
              Subscribe for the latest on cloud automation.
            </div>
          </div>
          <div className={styles.inputWithButton}>
            <div className={styles.input}>
              <Inputs
                text="subscribe@nilcloud.com"
              />
            </div>
            <Buttons
              cardType="logo"
              state={true}
              src="svg/arrow.svg"
            />
          </div>
          <div className={styles.links}>
            <div className={styles.listLinkItem9}>Legal</div>
            <div className={styles.listLinkItem10}>Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FOOTER;
