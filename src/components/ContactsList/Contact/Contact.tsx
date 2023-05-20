import { FC } from "react";
import styles from './Contact.module.css'
import { IContact } from "../../../model/IContact";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import chatIdToPhone from "../../../utils/chatIdToPhone";
interface ContactProps{
    contact:IContact
}
 const Contact:FC<ContactProps>=({contact})=>{
    const {selectedContact}=useTypedSelector(state=>state.contacts)
    const {selectContact}=useActions()
    const  onClickOnContact=(contact:IContact)=> {
      selectContact(contact)
    }
    return (
      <div onClick={() => onClickOnContact(contact)} className={`${styles.contact}  ${selectedContact?.chatId===contact.chatId && styles.selected}`}>
        
           <AccountCircleIcon sx={{fontSize:60}} className={`${styles.iconClickable} ${styles.avatarIcon}`}/>
           <div className={styles.details}>
           <span className={styles.name}>{contact.name ? contact.name : chatIdToPhone(contact.chatId)}</span>
           {contact.description && <span className={styles.description}>{contact.description}</span>}
           <div>
          </div>
        </div>
      </div>
    );
  }
export default Contact