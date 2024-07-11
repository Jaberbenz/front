import { FunctionComponent } from "react";
import styles from "./AdvantagesFrame.module.css";
import Headings from "../../modules/HEADERS/Headings";

interface AdvantagesFrameProps {
  id?: string;
}

const AdvantagesFrame: FunctionComponent<AdvantagesFrameProps> = ({
  id
}) => {
  return (
    <section id={id} className={styles.advantagesframe}>
      <Headings
        title="Benefits"
        subtitle="Equip your applications for tomorrow, now."
      />
      <div className={styles.featureGrid}>
        <div className={styles.cardBenefits}>
          <img            
            loading="lazy"
            alt=""
            src="svg/battery.svg"
          />
          <div className={styles.featureTitle}>
            Streamline Your Deployment Process
          </div>
          <div className={styles.featureDescription}>
            NilCloud offers a seamless deployment experience, enabling you to
            effortlessly push your code from GitLab and see it live in
            production. Our open-source technology, built on Kubernetes, Docker,
            and Ansible, ensures reliability and scalability for your
            applications. Say goodbye to complex deployment scripts and hello to
            simplicity with NilCloud.
          </div>
        </div>
        <div className={styles.cardBenefits}>
          <img 
            loading="lazy"
            alt=""
            src="svg/box.svg"
          />
          <div className={styles.featureTitle}>
            Effortless Stack Configuration for Every Language
          </div>
          <div className={styles.featureDescription}>
            With NilCloud, configuring your stack for any programming language
            is a breeze. Whether you're working with Python, JavaScript, Java,
            or any other language, our platform automatically sets up the
            environment you need. Spend less time configuring and more time
            coding with NilCloud's automated stack provisioning.
          </div>
        </div>
        <div className={styles.cardBenefits}>
          <img
            loading="lazy"
            alt=""
            src="svg/photo.svg"
          />
          <div className={styles.featureTitle}>
            Continuous Support and Precise Monitoring
          </div>
          <div className={styles.featureDescription}>
            We offer continuous support to ensure your applications run smoothly
            at all times. With precise monitoring powered by our ELK and
            Prometheus-Grafana stacks, gain insights into your system's
            performance and troubleshoot issues proactively. Trust NilCloud to
            provide reliable support and monitoring, allowing you to focus on
            delivering exceptional user experiences.
          </div>
        </div>
        <div className={styles.cardBenefits}>
          <img
            loading="lazy"
            alt=""
            src="svg/msgbox.svg"
          />
          <div className={styles.featureTitle}>
            Pay-Per-Use Pricing for Enterprises
          </div>
          <div className={styles.featureDescription}>
            NilCloud offers flexible pricing tailored to enterprise needs. Pay
            only for the resources you use, making it cost-effective for
            businesses of all sizes. With NilCloud, scale your deployment
            infrastructure without breaking the bank, ensuring optimal resource
            utilization and cost efficiency.
          </div>
        </div>
        <div className={styles.cardBenefits}>
          <img
            loading="lazy"
            alt=""
            src="svg/temp.svg"
          />
          <div className={styles.featureTitle}>
            Robust Security Measures for Peace of Mind
          </div>
          <div className={styles.featureDescription}>
            Security is paramount at NilCloud, which is why our stacks come
            equipped with robust measures to safeguard your applications. From
            firewalling to load-balancing, and the implementation of proxies and
            reverse-proxies, we prioritize the protection of your data and
            infrastructure. Rest assured that your applications are shielded
            from threats, while maintaining high availability and performance.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesFrame;
