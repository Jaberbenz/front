import { FunctionComponent } from "react";
import styles from "./ContactFrame.module.css";
import Buttons from "../../modules/ALL/Buttons";
import Inputs from "../../modules/ALL/Inputs";

interface ContactFrameProps {
  id?: string;
}

const ContactFrame: FunctionComponent<ContactFrameProps> = ({
  id
}) => {
  return (
    <section id={id} className={styles.propertySimpleFormWrapper}>
      <div className={styles.propertySimpleForm}>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <div className={styles.heading}>
              <h1 className={styles.heading1}>Connect With Us</h1>
              <h2 className={styles.subheading}>
                Our team is ready to assist you.
              </h2>
            </div>
            <div className={styles.inputContainer}>
              <Inputs
                text="Your Email Address Here"
              />
              <Buttons
                text="Send Message"
                state={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFrame;
