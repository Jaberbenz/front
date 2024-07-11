import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./HEADER_Top.module.css";
import Brands from "../ALL/Brands";

const HEADER: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <Brands/>
      <div className={styles.navbar}>
        <a href="#services" className={styles.navlink}>
          <div className={styles.navLabel}>Solution</div>
        </a>
        <a href="#advantages" className={styles.navlink}>
          <div className={styles.navLabel}>Benefits</div>
        </a>
        <a href="#pricing" className={styles.navlink}>
          <div className={styles.navLabel}>Pricing</div>
        </a>
        <a href="#contact" className={styles.navlink}>
          <div className={styles.navLabel}>Contact</div>
        </a>
        <a href="#team" className={styles.navlink}>
          <div className={styles.navLabel}>Team</div>
        </a>
        <a href="#documentation" className={styles.navlink}>
          <div className={styles.navLabel}>Documentation</div>
        </a>
        <Link to="/dashboard" className={styles.buttons}>
          <div className={styles.textContainer}>
            <div className={styles.cta}>Dashboard</div>
          </div>
        </Link>
        <Link  to="/signup" className={styles.buttons1}> 
          <div className={styles.textContainer}>
            <div className={styles.cta}>Get Started</div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default HEADER;
