import { FunctionComponent } from "react";
import HEADER_SIDE from "../../components/modules/HEADERS/HEADER_Side";
import FOOTER_Dash from "../../components/modules/FOOTERS/FOOTER_Dash";
import CARDHelp from "../../components/modules/CARDS/Help";
import Headings from "../../components/modules/HEADERS/Headings";
import styles from "./Support.module.css";

const Support: FunctionComponent = () => {
  return (
    <div className={styles.support}>
      <HEADER_SIDE />
      <main className={styles.body}>
        <header className={styles.services}>
          <div className={styles.content}>
            <Headings
              title="Need Help ?"
              subtitle="Always here to help our fellow DevSecOps !"
            />
            <div className={styles.cardsGrid}>
              <CARDHelp
                subheading="Learn"
                heading="Documentation"
                info={`<page_number>`}
              />
              <CARDHelp
                subheading="Community"
                heading="Discord"
                info={`<member_number>`}
              />
            </div>
          </div>
        </header>
        <FOOTER_Dash />
      </main>
    </div>
  );
};

export default Support;
