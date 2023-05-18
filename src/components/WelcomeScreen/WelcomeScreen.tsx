import { FC } from "react"
import styles from './WelcomeScreen.module.css'
import logo from '../../images/logo.png'
const WelcomeScreen: FC = () => {
    return (
        <div className={styles.welcomeScreen}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.welcomeTextContainer}>
                <span>WAchat</span>
            </div>
            <div className={styles.helpText}>
                 Add <span>WhatsApp</span> contact 
                 and start messaging here 
            </div>
        </div>
    )

}
export default WelcomeScreen