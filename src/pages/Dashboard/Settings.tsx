import { FunctionComponent } from "react";
import HEADER_SIDE from "../../components/modules/HEADERS/HEADER_Side";
import FOOTER_Dash from "../../components/modules/FOOTERS/FOOTER_Dash";
import Headings from "../../components/modules/HEADERS/Headings";
import styles from "./Settings.module.css";

const Settings: FunctionComponent = () => {
  return (
    <div className={styles.settings}>
      <HEADER_SIDE />
      <main className={styles.serviceParent}>
        <header className={styles.service}>
          <div className={styles.content}>
            <Headings title="Settings" subtitle="Setup everything you need" />
            <div className={styles.cardsGrid}>
              <button className={styles.cardStg}>
                <div className={styles.content1}>
                  <span>Account</span>
                  <div className={styles.arrow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={styles.size6}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              <button className={styles.cardStg}>
                <div className={styles.content1}>
                  <span>Billing</span>
                  <div className={styles.arrow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={styles.size6}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              <button className={styles.cardStg}>
                <div className={styles.content1}>
                  <span>SSH Keys</span>
                  <div className={styles.arrow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={styles.size6}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </header>
        <FOOTER_Dash />
      </main>
    </div>
  );
};

export default Settings;
