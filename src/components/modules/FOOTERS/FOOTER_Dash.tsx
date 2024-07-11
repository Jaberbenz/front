import { FunctionComponent } from "react";
import styles from "./FOOTER_Dash.module.css";

const FOOTER1: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.credits}>
        <div className={styles.divider} />
        <div className={styles.row}>
          <div className={styles.brandNameAll}>
            © 2024 NilCloud. All rights reserved.
          </div>
          <div className={styles.links}>
            <div className={styles.link}>Privacy Notice</div>
            <div className={styles.link}>Service Terms</div>
            <div className={styles.link}>Cookie Preferences</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FOOTER1;
