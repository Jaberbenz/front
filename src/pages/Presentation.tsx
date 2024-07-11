import { FunctionComponent, useEffect } from "react";
import HEADER from "../components/modules/HEADERS/HEADER_Top";
import ServicesFrame from "../components/frames/Presentation/DocumentationFrame";
import AdvantagesFrame from "../components/frames/Presentation/AdvantagesFrame";
import PricingFrame from "../components/frames/Presentation/PricingFrame";
import ContactFrame from "../components/frames/Presentation/ContactFrame";
import TeamFrame from "../components/frames/Presentation/TeamFrame";
import FOOTER from "../components/modules/FOOTERS/FOOTER_Pres";
import styles from "./Presentation.module.css";

const Presentation: FunctionComponent = () => {
  useEffect(() => {
    const smoothScroll = (target: HTMLElement) => {
      const targetPosition = target.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    };

    const scrollToTarget = (event: Event) => {
      if (event instanceof MouseEvent) {
        const targetId = (event.target as HTMLAnchorElement).getAttribute("href");
        if (targetId) {
          const target = document.querySelector(targetId);
          if (target) {
            event.preventDefault();
            smoothScroll(target as HTMLElement);
          }
        }
      }
    };

    const navLinks = document.querySelectorAll("a[href^='#']");
    navLinks.forEach(link => {
      link.addEventListener("click", scrollToTarget);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener("click", scrollToTarget);
      });
    };
  }, []);

  return (
    <div className={styles.presentation}>
      <HEADER />
      <section id="hero" className={styles.hero}>
        <h1 className={styles.heading}>
          <p className={styles.devToProd}>Dev to Prod in Sec</p>
          <p className={styles.awaits}>Awaits</p>
        </h1>
        <h3 className={styles.subheading}>Next-gen Deployment Solution</h3>
      </section>
      <ServicesFrame id="services"/>
      <AdvantagesFrame id="advantages"/>
      <PricingFrame id="pricing" />
      <ContactFrame id="contact" />
      <TeamFrame id="team" />
      <FOOTER />
    </div>
  );
};

export default Presentation;
