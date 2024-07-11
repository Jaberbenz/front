import { FunctionComponent } from "react";
import styles from "./Headings.module.css";

export type HeadingsType = {
    cardType?: string;
    title?: string;
    subtitle?: string;
};

const Headings: FunctionComponent<HeadingsType> = ({
    cardType,
    title,
    subtitle
}) => {
    let cardContent;
    switch (cardType) {
        case "h2":
            cardContent= (
                <div className={styles.wrapper}>
                    <h1 className={styles.h1}>{title}</h1>
                    <h2 className={styles.h2}>
                        {subtitle}
                    </h2>
                </div>
            );
            break;
        default:
            cardContent = (
                <div className={styles.wrapper}>
                    <h1 className={styles.h1}>{title}</h1>
                    <div className={styles.h4}>
                        {subtitle}
                    </div>
                </div>
            );
    }
    return cardContent;
};

export default Headings;
