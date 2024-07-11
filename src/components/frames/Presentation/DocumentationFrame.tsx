import { FunctionComponent } from "react";
import CARDDoc from "../../modules/CARDS/Documentation";
import styles from "./DocumentationFrame.module.css";
import Headings from "../../modules/HEADERS/Headings";

interface ServicesFrameProps {
  id: string;
}

const ServicesFrame: FunctionComponent<ServicesFrameProps> = ({
  id
}) => {
  return (
    <section id={id} className={styles.servicesFrame}>
      <div className={styles.content}>
        <Headings 
          title="Power Your Project"
          subtitle="Innovative solutions for modern challenges."
        />
        <div className={styles.cardsGrid}>
          <CARDDoc
            image="images/image-service3@2x.png"
            heading="Full-stack environment management"
            subheading="Environment"
            text="From development to Production in Second."
            href=""
            link="Explore Features"
          />
          <CARDDoc
            image="images/image-service1@2x.png"
            heading="Kubernetes, Ansible & Docker Technologies"
            subheading="Scalable Architecture"
            text="Secure, reliable, and consistent."
            href="#advantages"
            link="View Benefits"
          />
          <CARDDoc
            image="images/image-service2@2x.png"
            heading="SSL/TLS, Firewalling, Supervision"
            subheading="Secure Connections"
            text="Efficiency meets security and agility"
            href=""
            link="Explore Features"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesFrame;
