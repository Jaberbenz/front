import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
/* pages */
import Presentation from "./pages/Presentation";
import SignUp from "./pages/Connexion/SignUp";
import Login from "./pages/Connexion/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Dashboard/Projects";
import Support from "./pages/Dashboard/Support";
import Settings from "./pages/Dashboard/Settings";
import AddProjects from "./pages/Dashboard/AddProjects";
import SuccesAddProjects from "./pages/Dashboard/SuccesAddProjects";
import ProjectDetails from "./pages/Dashboard/ProjectDetails";
/* components */
import CustomCursorManager from "./components/CustomCursor/context/manager";
import CustomCursor from "./components/CustomCursor";
import { AuthProvider } from "./components/utils/authContext";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Accueil";
        metaDescription = "Bienvenue sur notre page de présentation.";
        break;
      case "/login":
        title = "Connexion";
        metaDescription = "Connectez-vous à votre compte.";
        break;
      case "/signup":
        title = "Inscription";
        metaDescription = "Créez un nouveau compte.";
        break;
      case "/dashboard":
        title = "Tableau de bord";
        metaDescription = "Accédez à votre tableau de bord.";
        break;
      case "/projects":
        title = "Projets";
        metaDescription = "Vos projets.";
        break;
      case "/addprojects":
        title = "Ajouter un projet";
        metaDescription = "Ajoutez un nouveau projet.";
        break;
      case "/successaddproject":
        title = "Projet ajouté";
        metaDescription = "Votre projet a été ajouté avec succès.";
        break;
      case "/projectdetails":
        title = "Détails du projet";
        metaDescription = "Détails de votre projet.";
        break;
      case "/support":
        title = "Support";
        metaDescription = "Contactez le support.";
        break;
      case "/settings":
        title = "Paramètres";
        metaDescription = "Modifiez vos paramètres.";
        break;
      default:
        title = "App";
        metaDescription = "Description de l'application.";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <CustomCursorManager>
      <CustomCursor />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Protected pages  - BEGIN */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/addprojects" element={<AddProjects />} />
          <Route path="/successaddproject" element={<SuccesAddProjects />} />
          <Route path="/projectdetails/:id" element={<ProjectDetails />} />
          {/* Protected pages  - END */}
        </Routes>
      </AuthProvider>
    </CustomCursorManager>
  );
}

export default App;
