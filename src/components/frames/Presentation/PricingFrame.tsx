import { FunctionComponent } from "react";
import styles from "./PricingFrame.module.css";
import Headings from "../../modules/HEADERS/Headings";
import CARDPlan from "../../modules/CARDS/SubPlans";

interface PricingFrameProps {
  id: string;
}

const PricingFrame: FunctionComponent<PricingFrameProps> = ({
  id
}) => {
  return (
    <section id={id} className={styles.propertyTablePricing}>
      <div className={styles.content}>
        <Headings
          title="Flexible Plans"
          subtitle="Choose a plan that fits your needs and budget."
        />
        <div className={styles.pricePlans}>
          <CARDPlan
            title="Starter"
            price="€4.90"
            cta_txt="Sign Up Now"
            cta_status={false}
            adv_1="1 User"
            adv_1_status={true}
            adv_2="3 Projects"
            adv_2_status={true}
            adv_3="10GB Storage"
            adv_3_status={true}
            adv_4="Email Only"
            adv_4_status={false}
            adv_5="Basic Support"
            adv_5_status={false}
            adv_6="Business Hours"
            adv_6_status={false}
            adv_7="Basic Security"
            adv_7_status={false}
            adv_8="Forum Access"
            adv_8_status={false}
          />
          <CARDPlan
            title="Professional"
            price="€9.90"
            cta_txt="Join Pro"
            cta_status={true}
            adv_1="Unlimited Users"
            adv_1_status={true}
            adv_2="10 Projects"
            adv_2_status={true}
            adv_3="100GB Storage"
            adv_3_status={true}
            adv_4="Multiple Sessions"
            adv_4_status={true}
            adv_5="Priority Support"
            adv_5_status={true}
            adv_6="Round-the-Clock"
            adv_6_status={false}
            adv_7="Advanced Security"
            adv_7_status={false}
            adv_8="Priority Forum"
            adv_8_status={false}
          />
          <CARDPlan
            title="Enterprise"
            price=" To use"
            cta_txt="Get Enterprise"
            cta_status={false}
            adv_1="Unrestricted Users"
            adv_1_status={true}
            adv_2="50 Projects"
            adv_2_status={true}
            adv_3="1To Storage"
            adv_3_status={true}
            adv_4="Unlimited Sessions (SSO)"
            adv_4_status={true}
            adv_5="White-glove Service"
            adv_5_status={true}
            adv_6="24/7 Priority"
            adv_6_status={true}
            adv_7="Premium Security"
            adv_7_status={true}
            adv_8="Exclusive Access"
            adv_8_status={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingFrame;
