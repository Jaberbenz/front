import { FunctionComponent, useState } from "react";
import HEADER_SIDE from "../../components/modules/HEADERS/HEADER_Side";
import FOOTER_Dash from "../../components/modules/FOOTERS/FOOTER_Dash";
import Headings from "../../components/modules/HEADERS/Headings";
import Button from "../../components/modules/ALL/Buttons";
import Inputs from "../../components/modules/ALL/Inputs";
import styles from "./AddProjects.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProjects: FunctionComponent = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [project_name, setProjectName] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  const handleSubmit = async () => {

    console.log('selectedLanguage :', selectedLanguage);
    console.log('uploadedFile :', uploadedFile);
    console.log('project_name :', project_name);

    if (!selectedLanguage) {
      alert("Veuillez sélectionner un langage.");
      return;
    }
    if (!uploadedFile) {
      alert("Veuillez téléverser un fichier ZIP.");
      return;
    }
    if (!project_name) {
      alert("Veuillez saisir un nom pour votre projet.");
      return;
    }

    const formData = new FormData();
    formData.append("language", selectedLanguage);
    formData.append("file", uploadedFile);
    formData.append("project_name", project_name);

    try {
      const response = await axios.post("https://api.nilcloud.net/project", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      console.log("Projet créé avec succès :", response.data);
      navigate("/successaddproject");
    } catch (error) {
      console.error("Erreur lors de la création du projet :", error);
    }
  };

  return (
    <div className={styles.addProjects}>
      <HEADER_SIDE />
      <main className={styles.mainContent}>
        <section className={styles.services}>
          <div className={styles.content}>
            <Headings
              title="Create New Project"
              subtitle="Register some things to help us,... help you !"
            />
          </div>
          <div className={styles.cardsGrid}>
            <div className={styles.content1}>
              <div className={styles.inputContainer}>
                <div className={styles.project}>Project</div>
                <div className={styles.projectForm}>
                  <Inputs
                    text="Project Name"
                    type="text"
                    value={project_name}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                  <Button
                    cardType="dropdown"
                    text="Language"
                    src="svg/union.svg"
                    state={true}
                    onLanguageSelect={handleLanguageSelect}
                  />
                </div>
              </div>
              <div className={styles.environment}>
                <div className={styles.environment1}>Environment</div>
                <Button
                    cardType="logo-text"
                    text="Development"
                    src="svg/union.svg"
                    state={false}
                  />
              </div>
              <div className={styles.addCode}>
                <div className={styles.codeZip}>Code (.zip)</div>
                <Button
                  cardType="upload-zip"
                  text="Upload"
                  state={true}
                  onFileUpload={handleFileUpload}
                />
              </div>
              <div className={styles.inviteMates}>
                <div className={styles.mates}>Mates</div>
                <div className={styles.inputContainer2}>
                  <Inputs
                    text="Username or Mail Address"
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                  />
                  <Button
                    text="Invite"
                    state={true}
                  />
                </div>
              </div>
            </div>
            <div className={styles.submit}>
              <Button
                text="Cancel"
                state={false}
              />
              <Button
                cardType="submit-project"
                text="Create"
                state={true}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </section>
        <FOOTER_Dash />
      </main>
    </div>
  );
};

export default AddProjects;
