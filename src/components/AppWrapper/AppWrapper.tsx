import { FC, useEffect } from "react";
import styles from "./AppWrapper.module.css"
import { useActions } from "../../hooks/useActions";
import Storage from "../../utils/Storage";
import { ToastContainer } from "react-toastify";
import { Button } from "@mui/material";
interface AppWrapperProps{
children:React.ReactNode
}
const AppWrapper:FC<AppWrapperProps>=({children})=>{
    const {fetchLogin,setAuth}=useActions()
 useEffect(()=>{
    const user=Storage.get('user')
    if(user){
        fetchLogin(user.idInstance,user.apiTokenInstance)
    }else{
        setAuth(false)
    }
 },[])
    return (
        <div className={styles.wrapper}>
        {children}
        <ToastContainer />
        </div>
    )
}
export default AppWrapper