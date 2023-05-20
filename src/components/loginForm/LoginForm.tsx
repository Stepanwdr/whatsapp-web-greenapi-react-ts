import { FC, useState,useEffect } from "react";
import styles from './LoginForm.module.css'
import Button from '@mui/material/Button';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { CircularProgress } from "@mui/material";
import Storage from "../../utils/Storage";
import { setWelcome } from "../../utils/setWelcome";

const LoginForm: FC = () => {
    const [idInstanceValue, setIdInstanceValue] = useState('')
    const [apiTokenInstanceValue, setApiTokenInstanceValue] = useState('')
    const {isLoading}=useTypedSelector(state=>state.auth)
    const {fetchLogin}=useActions()
   
    const login = () => {
       if(!idInstanceValue || !apiTokenInstanceValue)return 
       fetchLogin(+idInstanceValue,apiTokenInstanceValue)
    }

    useEffect(()=>{
        const user=Storage.get('user')
        if(user){
            setApiTokenInstanceValue(user.apiTokenInstanceValue)
            setIdInstanceValue(user.idInstanceValue)
            setWelcome(user)
        }
    },[])
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
                    required={true}
                    onChange={(ev)=>setIdInstanceValue(ev?.target.value)}/>
                </div>
                <div className={styles.inputContiner}>
                    <input
                    className={styles.loginInput}
                     type="text"
                     placeholder="ApiTokenInstance"
                     required={true}
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