import { useState } from "react";
import styles from "./HEADER_Side.module.css";
import Brands from "../ALL/Brands";
import { Link } from "react-router-dom";

interface ExpandState {
  support: boolean;
  settings: boolean;
}

const HEADER: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<ExpandState>({
    support: false,
    settings: false,
  });

  const toggleExpand = (section: keyof ExpandState) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className={styles.header}>
      <Brands />
      <nav className={styles.navbar}>
        <Link to="/dashboard" className={styles.navlink}>
          <div className={styles.navLabel}>
            <span className={styles.icon}>-</span> Home
          </div>
        </Link>
        <Link to="/projects" className={styles.navlink}>
          <div className={styles.navLabel}>
            <span className={styles.icon}>-</span> Projects
          </div>
        </Link>
        <div onClick={() => toggleExpand("support")} className={styles.navlink}>
          <Link to="/support" className={styles.navLabel}>
            <span className={styles.icon}>
              {isExpanded.support ? "▼" : "-"}
            </span>
            Support
          </Link>
        </div>
        <div
          className={`${styles.submenu} ${
            isExpanded.support ? styles.submenuExpanded : ""
          }`}
        >
          <Link to="/support/documentation" className={styles.navlink}>
            <div className={styles.navLabel}>Documentation</div>
          </Link>
          <Link to="/support/discord" className={styles.navlink}>
            <div className={styles.navLabel}>Discord</div>
          </Link>
        </div>
        <div
          onClick={() => toggleExpand("settings")}
          className={styles.navlink}
        >
          <Link to="/settings" className={styles.navLabel}>
            <span className={styles.icon}>
              {isExpanded.settings ? "▼" : "-"}
            </span>
            Settings
          </Link>
        </div>
        <div
          className={`${styles.submenu} ${
            isExpanded.settings ? styles.submenuExpanded : ""
          }`}
        >
          <Link to="/settings/general" className={styles.navlink}>
            <div className={styles.navLabel}>General</div>
          </Link>
          <Link to="/settings/account" className={styles.navlink}>
            <div className={styles.navLabel}>Account</div>
          </Link>
          <Link to="/settings/billing" className={styles.navlink}>
            <div className={styles.navLabel}>Billing</div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HEADER;
