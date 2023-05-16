import { FC } from "react";
import styles from './Message.module.css'
import { Moment } from "moment";

interface MessageProps{
    key:any
    message:string
    theirs:boolean,
    timestamp:string
}
const getClassName=(theirs:boolean)=>{
return theirs ? styles.messageTheirs : styles.messageUs 
}
const getTimestamp=(timestamp:string)=>{
 return timestamp
}
const Message:FC<MessageProps>=({key,message,theirs,timestamp})=>{
return <div
  key={key}
   className={
    `${styles.messageContainer} 
     ${getClassName(theirs)}
    `}>
<div className={styles.message}>
  <span className={styles.text}>{message}</span>
  <span className={styles.timestamp}>{getTimestamp(timestamp)}</span>
</div>
</div>
}
export default Message