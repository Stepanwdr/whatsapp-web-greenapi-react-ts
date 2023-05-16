import { FC, useState,useEffect } from "react";
import styles from './Conversations.module.css'
import MessageInput from "../MessageInput/MessageInput";
import ConversationNav from "../ConversationNav/ConversationNav";
import Message from "../Message/Message";
import { mess } from "../../consts/mess";
import { useTypedSelector } from "../../hooks/useTypedSelector";
interface ConversationsProps {
    messages: [],
    userInfo: {}
}

const Conversations: FC<ConversationsProps> = ({ messages, userInfo }) => {
    const [textMessageValue, setTextMessageValue] = useState('')
    const sendMessage = (ev: React.SyntheticEvent) => {
        ev.preventDefault()
    }
    return (<div className={styles.conversationSection}>
        <ConversationNav phone={'37498823987'}/>
        <div className={styles.conversationBody}>
            {
                mess.map((mess) => (
                    <Message
                        key={mess.key}
                        message={mess.message}
                        timestamp={mess.timestamp}
                        theirs={mess.theirs}
                    />
                ))
            }
        </div>
        <MessageInput
            value={textMessageValue}
            setValue={(value) => setTextMessageValue(value)}
            sendMessage={sendMessage}
        />
    </div>)
}

export default Conversations