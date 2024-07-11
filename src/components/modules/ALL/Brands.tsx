import { FunctionComponent } from "react";
import styles from "./Brands.module.css";

interface BrandsProps {
  cardType?: string;
}

const Brands: FunctionComponent<BrandsProps> = ({
  cardType
}) => {
  let cardContent;
  switch (cardType) {
    case "big":
      cardContent= (
        <div className={styles.brand}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="images/brand_big@2x.png"
            />
            <h2 className={styles.brandname}>NilCloud</h2>
        </div>
      );
      break;
    default:
      cardContent= (
        <a href="/" className={styles.brand}>
            <img
                className={styles.logoIcon}
                loading="lazy"
                alt=""
                src="images/brand@2x.png"
            />
            <div className={styles.brandname}>NilCloud</div>
            </a>
      );
    }
  return cardContent;
};

export default Brands;