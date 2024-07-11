import { FunctionComponent } from "react";
import styles from "./SubPlans.module.css";
import Buttons from "../ALL/Buttons";

interface CARDPlanProps {
    title?: string;
    price?: string;
    cta_txt?: string;
    cta_status?: boolean;
    adv_1?: string;
    adv_2?: string;
    adv_3?: string;
    adv_4?: string;
    adv_5?: string;
    adv_6?: string;
    adv_7?: string;
    adv_8?: string;
    adv_1_status?: boolean;
    adv_2_status?: boolean;
    adv_3_status?: boolean;
    adv_4_status?: boolean;
    adv_5_status?: boolean;
    adv_6_status?: boolean;
    adv_7_status?: boolean;
    adv_8_status?: boolean;
}

const icon_up="svg/validcircle-open.svg"
const icon_down="svg/validcircle-closed.svg"
    

const CARDPlan: FunctionComponent<CARDPlanProps> = ({
    title,
    price,
    cta_txt,
    cta_status,
    adv_1,
    adv_2,
    adv_3,
    adv_4,
    adv_5,
    adv_6,
    adv_7,
    adv_8,
    adv_1_status,
    adv_2_status,
    adv_3_status,
    adv_4_status,
    adv_5_status,
    adv_6_status,
    adv_7_status,
    adv_8_status,
}) => {
    return (
        <>
        <div className={styles.cardPlan}>
            <div className={styles.plan}>
                <div className={styles.heading}>
                    <h3 className={styles.title}>{title}</h3>
                </div>
                <div className={styles.price}>
                    <div className={styles.price1}>{price}</div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.perMonth}>/month</div>
                        <div className={styles.yearlySwitch}>
                            <div className={styles.yearly}>billed annually</div>
                            <div className={styles.switch}>
                                <div className={styles.circle} />
                            </div>
                        </div>
                    </div>
                </div>
                <Buttons
                    text={cta_txt}
                    state={cta_status}
                />
            </div>
            <div className={styles.featureList}>
                <div className={styles.cardFeature}>
                    <img
                        className={styles.validcircleIcon}
                        loading="lazy"
                        alt=""
                        src={adv_1_status ? icon_up : icon_down} />
                    <div className={styles.unlimited}>{adv_1}</div>
                </div>
                <div className={styles.cardFeature}>
                    <img
                        className={styles.validcircleIcon}
                        loading="lazy"
                        alt=""
                        src={adv_2_status ? icon_up : icon_down} />
                    <div className={styles.unlimited}>{adv_2}</div>
                </div>
                <div className={styles.cardFeature}>
                    <img
                        className={styles.validcircleIcon}
                        loading="lazy"
                        alt=""
                        src={adv_3_status ? icon_up : icon_down} />
                    <div className={styles.unlimited}>{adv_3}</div>
                </div>
                <div className={styles.cardFeature}>
                    <img
                        className={styles.validcircleIcon}
                        loading="lazy"
                        alt=""
                        src={adv_4_status ? icon_up : icon_down} />
                    <div className={styles.unlimited}>{adv_4}</div>
                </div>
                <div className={styles.cardFeature}>
                    <img
                        className={styles.validcircleIcon}
                        loading="lazy"
                        alt=""
                        src={adv_5_status ? icon_up : icon_down} />
                    <div className={styles.unlimited}>{adv_5}</div>
                </div>
                <div className={styles.cardFeature}>
                    <img
                        className={styles.validcircleIcon}
                        loading="lazy"
                        alt=""
                        src={adv_6_status ? icon_up : icon_down} />
                    <div className={styles.unlimited}>{adv_6}</div>
                </div>
                <div className={styles.cardFeature}>
                    <img
                        className={styles.validcircleIcon}
                        loading="lazy"
                        alt=""
                        src={adv_7_status ? icon_up : icon_down} />
                    <div className={styles.unlimited}>{adv_7}</div>
                </div>
                <div className={styles.cardFeature}>
                    <img
                        className={styles.validcircleIcon}
                        loading="lazy"
                        alt=""
                        src={adv_8_status ? icon_up : icon_down} />
                    <div className={styles.unlimited}>{adv_8}</div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CARDPlan;