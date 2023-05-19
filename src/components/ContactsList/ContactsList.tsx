import { FC,useState } from "react";
import Contact from "./Contact/Contact";
import { IContact } from "../../model/IContact";
import styles from './ContactsList.module.css'
import ContactsNav from "./ContactsNav/ContactsNav";
import NewContactDialog from "./NewContactDialog/NewContactDialog";
import { useActions } from "../../hooks/useActions";

interface ContactsListProps{
    contacts:IContact[]
}
const ContactsList:FC<ContactsListProps>=({contacts})=>{
   const [showNewContactDialog,setShowNewContactDialog]=useState(false)
   const {logout,fetchGetNotification}=useActions()

   const onNotificationClick=()=>{
    fetchGetNotification()
   }
   const logOut=()=>{
    logout()
   }
 return (
    <div className={styles.listSection}>
      <ContactsNav 
      logOut={logOut}
      oNotificationClick={onNotificationClick}
      openDialog={(open:boolean)=>setShowNewContactDialog(open)}
       />
     <NewContactDialog
      isOpen={showNewContactDialog} 
      setIsOpen={(open)=>setShowNewContactDialog(open)}/>
      {contacts.map((contact) => {
        return <Contact  key={contact.chatId} contact={contact} />;
      })}
    </div>
  );
}
export default ContactsList