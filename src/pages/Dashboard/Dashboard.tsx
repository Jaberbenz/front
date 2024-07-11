import { FunctionComponent } from "react";
import FOOTER_Dash from "../../components/modules/FOOTERS/FOOTER_Dash";
import styles from "./Dashboard.module.css";
import HEADER_SIDE from "../../components/modules/HEADERS/HEADER_Side";
import Headings from "../../components/modules/HEADERS/Headings";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <HEADER_SIDE />
      <div className={styles.serviceframeParent}>
        <div className={styles.serviceframe}>
          <div className={styles.content}>
            <Headings
              title="Begin here !"
              subtitle="Push your code, build your app, deploy your solution, supervise..."
            />
          </div>
        </div>
        <FOOTER_Dash />
      </div>
    </div>
  );
};

export default Dashboard;
