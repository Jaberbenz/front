import { FunctionComponent } from "react";
import CARDProfile from "../../modules/CARDS/Profile";
import styles from "./TeamFrame.module.css";
import Headings from "../../modules/HEADERS/Headings";

interface TeamFrameProps {
  id: string;
}

const TeamFrame: FunctionComponent<TeamFrameProps> = ({
  id
}) => {
  return (
    <section id={id} className={styles.contentWrapper}>
      <div className={styles.content}>
        <Headings
          title="Meet the Innovators"
          subtitle="The minds behind the technology."
        />
        <div className={styles.teamList}>
          <CARDProfile
            image="images/jules@2x.png"
            name="Jules Pichon"
            jobTitle="Lead SRE"
          />
          <CARDProfile
            image="images/vincent@2x.png"
            name="Vincent Cicorea"
            jobTitle="Lead Hardware Engineer"
          />
          <CARDProfile
            image="images/mahe@2x.png"
            name="Mahé Bouchardeau"
            jobTitle="CEO & Head of Operations"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamFrame;
