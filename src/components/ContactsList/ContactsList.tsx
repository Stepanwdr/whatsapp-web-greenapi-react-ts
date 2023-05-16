import { FC,useState } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircularProgress from '@mui/material/CircularProgress';
import Contact from "../Contact/Contact";
import { IContact } from "../../model/IContact";
import styles from './ContactsList.module.css'
import ContactsNav from "../ContactsNav/ContactsNav";
import NewContactDialog from "../NewContactDialog/NewContactDialog";
import { useActions } from "../../hooks/useActions";


interface ContactsListProps{
    onClick:()=>void,
    contacts:IContact[]
}
const ContactsList:FC<ContactsListProps>=({onClick,contacts})=>{
   const [showNewContactDialog,setShowNewContactDialog]=useState(false)
   const {logout}=useActions()
   const logOut=()=>{
    logout()
   }
  
 return (
    <div className={styles.listSection}>
      <ContactsNav logOut={logOut} openDialog={(open:boolean)=>setShowNewContactDialog(open)}/>
     <NewContactDialog isOpen={showNewContactDialog} setIsOpen={(open)=>setShowNewContactDialog(open)}/>
      {contacts.map((c) => {
        return <Contact onClick={onClick} key={c.phone} contact={c} />;
      })}
   
    </div>
  );
}
export default ContactsList