import { FC, useState, useEffect } from "react";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import Conversations from "../../components/Conversations/Conversations";
import MessageInput from "../../components/MessageInput/MessageInput";
import styles from './Chat.module.css'
import ContactsList from "../../components/ContactsList/ContactsList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Alert from '@mui/material/Alert';
import { chatServices } from "../../api/chatServices";
const Chat: FC = () => {
  const { succesText } = useTypedSelector(state => state.auth)
  const { contacts, selectedContact } = useTypedSelector(state => state.contacts)
const  notifi=async()=>{
    try {
      const res = await chatServices.getNotification()
      console.log(res)
    }
    catch (e){
      console.log(e)
  }
}

const deleteNotifi=async()=>{
  try {
    const res = await chatServices.deleteNotification(1)
    console.log(res)
  }
  catch (e){
    console.log(e)
}
}
  useEffect(() => {
    deleteNotifi()
    }, [])

  useEffect(() => {

  }, [selectedContact])
  const messages = [] as any
  const userInfo = [] as any
  /* const contacts = [
     {name:"Gago",phone:374823987},
     {name:"Samo",phone:374823987},
     {name:"Nazo",phone:37494823987},
     {name:"Hamo",phone:37477823987}
   ] as any
   */

  const onClickOnContact = () => {

  }

  return (
    <div className={`${styles.chatWrapper}`}>
      <div className={styles.leftSide}>
        <ContactsList onClick={onClickOnContact} contacts={contacts} />
      </div>

      <div className={styles.content}>
        <Conversations messages={messages} userInfo={userInfo} />
      </div>
      {succesText && <Alert severity="warning">{succesText}</Alert>}
    </div>
  )
}
export default Chat