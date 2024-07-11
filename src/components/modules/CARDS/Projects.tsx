import { FunctionComponent } from "react";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";
import CARDProfile from "./Profile";

export type CARDProjectType = {
  cardType?: string;
  id?: number;
  name?: string;
  language?: string;
};

const CARDProject: FunctionComponent<CARDProjectType> = ({
    cardType,
    id,
    name,
    language
}) => {
    let cardContent;
    switch(cardType) {
        case "AddProject":
            cardContent = (
              <Link to="/addprojects" className={styles.content}>
                <div className={styles.cardAddpro}>
                  <div className={styles.content1}>
                    <div className={styles.contentContainer}>
                      <div className={styles.content2}>
                        <h1 className={styles.heading2}>Create New Project</h1>
                      </div>
                      <img
                        className={styles.addFrIcon}
                        loading="lazy"
                        alt=""
                        src="images/add-fr@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
            break;
        case "Project":
            cardContent = (
              <Link to={`/projectdetails/${id}`} className={styles.cardPro}>
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="images/image1@2x.png"
                />
                <div className={styles.content3}>
                  <div className={styles.contentContainer1}>
                    <div className={styles.content4}>
                      <div className={styles.subheading1}>{language}</div>
                      <h1 className={styles.heading3}>{name}</h1>
                      <div className={styles.cta}>
                        <div className={styles.button}>
                          <div className={styles.cta1}>{`<env_number>`}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.profiles}>
                      <CARDProfile
                        cardType="notxt"
                        image="images/jules@2x.png"
                      />
                      <CARDProfile
                        cardType="add"
                        image="images/jules@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.cta2}>
                    <div className={styles.ctaChild} />
                    <div className={styles.ctaItem} />
                    <div className={styles.ctaInner} />
                  </div>
                </div>
              </Link>
            );
            break;
        default:
            cardContent=null;
        }
        return cardContent;
};

export default CARDProject;
