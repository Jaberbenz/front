import { FunctionComponent } from "react";
import HEADER from "../../components/modules/HEADERS/HEADER_Side";
import styles from "./SuccesAddProjects.module.css";
import Headings from "../../components/modules/HEADERS/Headings";
import FOOTER from "../../components/modules/FOOTERS/FOOTER_Dash";
import Buttons from "../../components/modules/ALL/Buttons";
import { Navigate, useNavigate } from "react-router-dom";

const SuccesAddProjects: FunctionComponent = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async () => {
    navigate("/dashboard");
  }
  return (
    <div className={styles.succesAddProjects}>
      <HEADER />
      <main className={styles.main}>
        <div className={styles.services}>
          <div className={styles.content}>
            <Headings
              title="New Project Created !"
              subtitle="Adventures begins now !"
            />
          </div>
          <div className={styles.cardsGrid}>
            <div className={styles.inTheNextContainer}>
              <p className={styles.inTheNext}>
                In the next page you will be able to see every links needed to
                correctly manage your application.
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.summary}>Summary :</p>
              <ul className={styles.developmentLiteralyWhereY}>
                <li className={styles.developmentLiteraly}>
                  Development : literaly where your code is stored and where you
                  can use your own VSCode instance.
                </li>
                <li className={styles.deploymentThe}>
                  Deployment : the dashboard gived to see your infrastructure
                  running.
                </li>
                <li className={styles.godHimself}>
                  God himself : give access to your Supervision, setup to see
                  what your infrastructure cost.
                </li>
                <li>{`Learn & Apply : the Documentation Link, always helpfull.`}</li>
              </ul>
            </div>
            <div className={styles.submit}>
              <Buttons
                cardType="submit"
                text="Continue"
                state={true}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
        <FOOTER />
      </main>
    </div>
  );
};

export default SuccesAddProjects;
