import { FunctionComponent, useEffect, useState } from "react";
import CARDService from "../../components/modules/CARDS/Service";
import FOOTER_Dash from "../../components/modules/FOOTERS/FOOTER_Dash";
import styles from "./ProjectDetails.module.css";
import HEADER_SIDE from "../../components/modules/HEADERS/HEADER_Side";
import Headings from "../../components/modules/HEADERS/Headings";
import { useParams } from "react-router-dom";

interface Project {
  id: number;
  name: string;
  language: string;
  description: string;
  gitlabUrl: string;
}

const ProjectDetails: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const hardcodedProjects: Project[] = [
      {
        id: 1,
        name: "Project One",
        language: "JavaScript",
        description: "Description for project one.",
        gitlabUrl: "https://gitlab.com/project-one",
      },
      {
        id: 2,
        name: "Project Two",
        language: "Python",
        description: "Description for project two.",
        gitlabUrl: "https://gitlab.com/project-two",
      },
      {
        id: 3,
        name: "Project Three",
        language: "Java",
        description: "Description for project three.",
        gitlabUrl: "https://gitlab.com/project-three",
      },
    ];

    const project = hardcodedProjects.find((p) => p.id.toString() === id);
    setProject(project || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Projet non trouvé.</div>;
  }

  return (
    <div className={styles.dashboard}>
      <HEADER_SIDE />
      <div className={styles.serviceframeParent}>
        <div className={styles.serviceframe}>
          <div className={styles.content}>
            <Headings
              title="Do everything you want !"
              subtitle="Modify your code, see your app running, supervise, learn..."
            />
            <div className={styles.cardsGrid}>
              <CARDService
                image="images/image1@2x.png"
                subheading="VSCode" // Environment
                heading="Development"
                link="https://vsc.nilcloud.net" // "https://localhost:6901"
              />
              <CARDService
                image="images/image-31@2x.png"
                subheading="Gitlab" // Documentation
                heading="Configuration" // {`Learn & Apply`}
                link={project.gitlabUrl}
              />
              <CARDService
                image="images/image-11@2x.png"
                subheading="Rancher" // Stacks
                heading="Deployment"
                link="https://kdash.nilcloud.net"
              />
              <CARDService
                image="images/image-21@2x.png"
                subheading="Grafana" // Supervision
                heading="God himself"
                link=""
              />
            </div>
          </div>
        </div>
        <FOOTER_Dash />
      </div>
    </div>
  );
};

export default ProjectDetails;
