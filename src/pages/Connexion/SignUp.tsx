import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/utils/authContext";
import InputConnexion from "../../components/modules/FORMS/InputConnexion";
import Headings from "../../components/modules/HEADERS/Headings";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("SignUp Page Triggered, Authenticated ? ", isAuthenticated);
      // Rediriger vers la page d'origine ou le tableau de bord après la connexion
      const redirectTo = "/dashboard" || location.state?.from?.pathname;
      navigate(redirectTo, { replace: true });
    }
  }, [isAuthenticated, location.state, navigate]);

  return (
    <div className={styles.signup}>
      <main className={styles.hero}>
        <div className={styles.heroInner}>
          <Headings
            cardType="h2"
            title="Get Started"
            subtitle="Begin your journey in the world of automation..."
          />
        </div>
        <InputConnexion cardType="SignUp" />
      </main>
    </div>
  );
};

export default SignUp;
