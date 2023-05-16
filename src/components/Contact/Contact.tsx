import { FC } from "react";
import styles from './Contact.module.css'
import { IContact } from "../../model/IContact";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
interface ContactProps{
    onClick:()=>void,
    contact:IContact
}

 const Contact:FC<ContactProps>=({onClick,contact})=>{
    const  onClickOnContact=(contact:IContact)=> {
     // window.location = `/?to=${contact}`;
    }
    return (
      <div onClick={(e) => onClickOnContact(contact)} className={styles.contact}>
        <div className={styles.details}>
           <AccountCircleIcon sx={{fontSize:60}} className={`${styles.iconClickable} ${styles.avatarIcon}`}/>
          <span className={styles.name}>{contact.name}</span>
        </div>
      </div>
    );
  }
export default Contact