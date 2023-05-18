import { FC } from "react";
import styles from './MessageInput.module.css'
import SendIcon from '@mui/icons-material/Send';
interface MessageInputProps{
    value:string,
    setValue:(value:string)=>void,
    sendMessage:(e: React.SyntheticEvent)=>void
}
const MessageInput:FC<MessageInputProps> = ({ 
    value,
    setValue,
    sendMessage
}) => {
    return (
        <form className={styles.messageForm} onSubmit={sendMessage}>
            <div className={styles.inputContainer}>
                <input
                className={styles.messageInput}
                placeholder="Type a message"
                value={value}
                onChange={({ target: { value } }) => setValue(value)} />
            <button className={styles.sendBtn} onClick={sendMessage}>
             <SendIcon className={styles.sendIcon}/>
             </button>
            </div>
        </form>
    )
}

export default MessageInput