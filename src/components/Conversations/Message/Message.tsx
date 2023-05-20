import { FC } from "react";
import styles from './Message.module.css'
import moment from "moment";

interface MessageProps {
  key: number
  message: string
  theirs: boolean,
  timestamp: number,
}
const getClassName = (theirs: boolean) => {
  return theirs ? styles.messageTheirs : styles.messageUs
}
const getTimestamp = (timestamp: number) => {
  return moment(timestamp).local().format('h:mm')
}

const Message: FC<MessageProps> = ({ key,message, theirs, timestamp }) => {
   if(!message){
    return null
   }
  return <div
    key={key}
    className={`${styles.messageContainer} ${getClassName(theirs)}`}>
    <div className={styles.message}>
      <span className={styles.text}>{message}</span>
      <span className={styles.timestamp}>{getTimestamp(timestamp)}</span>
    </div>
  </div>
}
export default Message

