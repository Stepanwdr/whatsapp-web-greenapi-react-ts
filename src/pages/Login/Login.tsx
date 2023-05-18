import { FC } from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import styles from './Login.module.css'
import logo from "../../images/logo.png"
const Login:FC=()=>{
    
return (
    <div className={styles.loginContainer}>
        <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <span className={styles.logoText}>WAchat WEB</span>
        </div>
       <LoginForm/> 
    </div>
)
}
export default Login