import { FunctionComponent } from "react";
import styles from "./InputConnexion.module.css";
import Buttons from "../ALL/Buttons";
import Inputs from "../ALL/Inputs";
import Brands from "../ALL/Brands";
import { useAuth } from '../../utils/authContext';

interface InputProps {
    cardType?: string;
    mail?: string;
}

const InputConnexion: FunctionComponent<InputProps> = ({ cardType, mail }) => {
    const { login } = useAuth();
    
    let cardContent;
    switch(cardType) {
        case "Login":
            cardContent = (
                <div className={styles.inputContainer}>
                    <div className={styles.inputContainerInner}>
                        <Brands
                            cardType="big"
                        />
                    </div>
                    <div className={styles.inputsWrapper}>
                        <div className={styles.inputs}>
                            <Buttons
                                cardType="logo-text"
                                state={false}
                                text="Continue With Google"
                                src="images/logo-google@2x.png"
                            />
                        </div>
                    </div>
                    <div className={styles.dividers}>
                        <div className={styles.dividerWrapper}>
                            <div className={styles.divider} />
                        </div>
                        <div className={styles.or}>or</div>
                        <div className={styles.dividerWrapper}>
                            <div className={styles.divider} />
                        </div>
                    </div>
                    <div className={styles.buttonsWrapper}>
                        <Buttons
                            cardType="submit"
                            text="Single Sign-On"
                            state={true}
                            onSubmit={login}
                        />
                    </div>
                </div>
            );
            break;
        case "SignUp":
            cardContent = (
                <form className={styles.inputContainer}>
                    <div className={styles.inputContainerInner}>
                        <Brands
                            cardType="big"
                        />
                    </div>
                    <div className={styles.inputs}>
                        <Inputs
                        cardType="mandatory"
                        text="Enter First Name"
                        />
                        <Inputs
                        cardType="mandatory"
                        text="Enter Last Name"
                        />
                        <Inputs
                        cardType="mandatory"
                        text="Enter Email Address"
                        />
                        <Inputs
                        text="Enter Company Name"
                        />
                        <Inputs
                        cardType="mandatory"
                        text="Enter Country/Region"
                        />
                        <div className={styles.byContinuingYouContainer}>
                        By continuing, you agree to Nilcloud's
                        <span className={styles.termsOfService}>Terms of Service</span>
                        {`, `}
                        <span className={styles.privacyPolicy}>Privacy Policy</span>
                        {`, `}
                        <span className={styles.cookiePreferences}>Cookie Preferences</span>.
                        </div>
                    </div>
                    <div className={styles.buttonsWrapper}>
                        {/* <Buttons
                            cardType="submit"
                            text="Create"
                            state={true}
                            onSubmit={handleSignUp}
                        /> */}
                    </div>
                    <div className={styles.alreadyHaveAnContainer}>
                        <span className={styles.alreadyHaveAnContainer1}>
                        Already have an account? 
                        <span className={styles.logIn}>Log in</span>
                        </span>
                    </div>
                </form>
            );
            break;
        case "Code":
            cardContent = (
                <form className={styles.inputContainer}>
                    <div className={styles.inputContainerInner}>
                        <Brands
                            cardType="big"
                        />
                    </div>
                    <div className={styles.inputs}>
                        <div className={styles.weSentAContainer}>
                        <span className={styles.weSentAContainer1}>
                            <p
                            className={styles.weSentA}
                            >{`We sent a temporary login code to ` + mail + `.`}</p>
                            <p className={styles.notYou}>Not you?</p>
                        </span>
                        </div>
                        <Inputs
                        text="Enter Login Code"
                        />
                        <div className={styles.byContinuingYouContainer}>
                        By continuing, you agree to Nilcloud's 
                        <span className={styles.termsOfService}>Terms of Service</span>
                        {`, `}
                        <span className={styles.privacyPolicy}>Privacy Policy</span>
                        {`, `}
                        <span className={styles.cookiePreferences}>Cookie Preferences</span>.
                        </div>
                    </div>
                    {/* <Buttons
                        cardType="submit"
                        text="Create"
                        state={true}
                        onSubmit={handleCodeTest}
                    /> */}
                </form>
            );
            break;
        case "Password":
            cardContent = (
                <form className={styles.inputContainer}>
                    <div className={styles.inputContainerInner}>
                        <Brands
                            cardType="big"
                        />
                    </div>
                    <div className={styles.inputs}>
                        <Inputs
                        cardType="mandatory"
                        text="Create New Password"
                        />
                        <Inputs
                        cardType="mandatory"
                        text="Confirm New Password"
                        />
                        <div className={styles.passwordRequirementsMustContainer}>
                        <p className={styles.passwordRequirements1}>Password requirements</p>
                        <ul className={styles.mustBeAMinimumOf12Charac}>
                            <li className={styles.mustBeA}>
                             Must be a minimum of 12 characters.
                            </li>
                            <li className={styles.mustContainLetters}>
                             Must contain letters, numbers, and symbols.
                            </li>
                            <li> Passwords must match.</li>
                        </ul>
                        </div>
                    </div>
                    <div className={styles.inputs}>
                        <div className={styles.newsletter}>
                        <div className={styles.switch}>
                            <div className={styles.circle} />
                        </div>
                        <div className={styles.iWouldLike}>
                            I would like to receive occasional updates about new product
                            releases, technical content, tips, and more to help optimize my
                            NilCloud experience. I can unsubscribe at any time.
                        </div>
                        </div>
                    </div>
                    {/* <Buttons
                        cardType="submit"
                        text="Create"
                        state={true}
                        onSubmit={handlePasswordChange}
                    /> */}
                </form>
                );
            break;
        default:
            cardContent=null;
    }
    return cardContent;
};

export default InputConnexion;

// LOGIN
{/* const InputConnexion: FunctionComponent<InputProps> = ({ cardType, mail }) => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleIdentifierChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIdentifier(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
    
            const body = JSON.stringify({ identifier, password });
            const res = await axios.post('https://api.nilcloud.net/auth/login', body, config);
    
            if (res && res.data && res.data.pk) {
                // Stocker le token dans le localStorage
                localStorage.setItem('pk', res.data.pk);
                // Rediriger l'utilisateur vers la page /dashboard
                navigate('/dashboard');
            }
    
        } catch (err) {
            console.error('Error:', err);
            console.log('Error response:', err);
        }
    };    

 <div className={styles.inputs_form}>
    <Inputs
        text="Enter Username or mail address"
        type="text"
        value={identifier}
        onChange={handleIdentifierChange}
    />
    <Inputs
        text="Enter password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
    />
    <div className={styles.byContinuingYouContainer}>
        By continuing, you agree to Nilcloud’s 
        <span className={styles.termsOfService}>Terms of Service</span>
        {`, `}
        <span className={styles.privacyPolicy}>Privacy Policy</span>
        {`, `}
        <span className={styles.cookiePreferences}>Cookie Preferences</span>.
    </div>
</div> */}