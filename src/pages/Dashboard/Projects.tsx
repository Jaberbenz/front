import { FunctionComponent, useEffect, useState } from "react";
import HEADER_SIDE from "../../components/modules/HEADERS/HEADER_Side";
import FOOTER_Dash from "../../components/modules/FOOTERS/FOOTER_Dash";
import Headings from "../../components/modules/HEADERS/Headings";
import styles from "./Projects.module.css";
import CARDProject from "../../components/modules/CARDS/Projects";

interface Project {
  id: number;
  name: string;
  language: string;
  description: string;
}

const Projects: FunctionComponent = () => {
  const hardcodedProjects: Project[] = [
    {
      id: 1,
      name: "Project One",
      language: "JavaScript",
      description: "Description for project one.",
    },
    {
      id: 2,
      name: "Project Two",
      language: "Python",
      description: "Description for project two.",
    },
    {
      id: 3,
      name: "Project Three",
      language: "Java",
      description: "Description for project three.",
    },
  ];

  const [projects, setProjects] = useState<Project[]>(hardcodedProjects);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading for demonstration
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.projects}>
      <HEADER_SIDE />
      <main className={styles.serviceframeParent}>
        <header className={styles.service}>
          <section className={styles.serviceframe}>
            <Headings
              title="My Awesome Projects"
              subtitle="Give us your code, we'll make it stonks !"
            />
            <div className={styles.cardsGrid}>
              <CARDProject cardType="AddProject" />
              {projects.length > 0 ? (
                projects.map((project) => (
                  <CARDProject
                    key={project.id}
                    id={project.id}
                    cardType="Project"
                    name={project.name}
                    language={project.language}
                  />
                ))
              ) : (
                <div className={styles.noProjects}>
                  You don't have any. Time to start up !
                </div>
              )}
            </div>
          </section>
        </header>
        <FOOTER_Dash />
      </main>
    </div>
  );
};

export default Projects;
