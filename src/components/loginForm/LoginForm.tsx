import { FC, useState } from "react";
import styles from './LoginForm.module.css'
import Button from '@mui/material/Button';

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { initialContact } from "../../consts/initialContact";
import { CircularProgress } from "@mui/material";

const LoginForm: FC = () => {
    const [idInstanceValue, setIdInstanceValue] = useState('')
    const [apiTokenInstanceValue, setApiTokenInstanceValue] = useState('')
    const {error,isLoading}=useTypedSelector(state=>state.auth)
    const {fetchLogin}=useActions()
    const login = () => {
       if(!idInstanceValue || !apiTokenInstanceValue)return 
       fetchLogin(+idInstanceValue,apiTokenInstanceValue)
    }
    return (
        <div className={styles.formCotainer}>
            <h4 className={styles.formHeader}>
                GreenApi Authorization
            </h4>
            <form onSubmit={login}>
                <div className={styles.inputContiner}>
                    <input
                    className={styles.loginInput}
                    type="text"
                    placeholder="IdInstance"
                    value={idInstanceValue}
                    onChange={(ev)=>setIdInstanceValue(ev?.target.value)}/>
                </div>
                <div className={styles.inputContiner}>
                    <input
                    className={styles.loginInput}
                     type="text"
                     placeholder="ApiTokenInstance"
                     value={apiTokenInstanceValue}
                     onChange={(ev)=>setApiTokenInstanceValue(ev?.target.value)}/>
                </div>
                <Button variant="outlined" color="success" disabled={isLoading} onClick={login}>
                    {isLoading ?  <CircularProgress size={18}/> :'Login'}
                </Button>
            </form>
          
        </div>

    )
}
export default LoginForm