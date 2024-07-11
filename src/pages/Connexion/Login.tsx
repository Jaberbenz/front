import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/utils/authContext';
import InputConnexion from '../../components/modules/FORMS/InputConnexion';
import Headings from '../../components/modules/HEADERS/Headings';
import styles from "./Login.module.css";

const Login = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("LogIn Page Triggered, Authenticated ? ", isAuthenticated);
      // Rediriger vers la page d'origine ou le tableau de bord après la connexion
      const redirectTo = '/dashboard' || location.state?.from?.pathname;
      navigate(redirectTo, { replace: true });
    }
  }, [isAuthenticated, location.state, navigate]);

  return (
    <div className={styles.login}>
      <main className={styles.hero}>
        <div className={styles.heroInner}>
          <Headings
            cardType="h2"
            title="Welcome Back"
            subtitle="Continue your journey in the world of automation..."
          />
        </div>
        <InputConnexion
          cardType="Login"
        />
      </main>
    </div>
  )
}

export default Login;