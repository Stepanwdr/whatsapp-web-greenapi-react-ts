import { FC,useEffect } from "react";
import { IMessage } from "../../../model/IMessage";
import styles from './ConversationsBody.module.css'
import Message from "../Message/Message";
import { useActions } from "../../../hooks/useActions";
import {scroll} from '../../../utils/scrollToBottom'
interface ConversationsBodyProps {
    messages: IMessage[]
}
const ConversationsBody: FC<ConversationsBodyProps> = ({ messages }) => {
    const { fetchGetNotification} = useActions()
    useEffect(() => {
        if (messages) {
            scroll()
        }
    }, [messages])


    useEffect(() => {
         setInterval(()=>{
         fetchGetNotification()
        },5000)
 
      }, [])

    return (<div className={styles.conversationBody} id={'scroll-to-bottom'}>
        {
            messages.length ?
                messages
                    .sort((a, b) => a.timestamp - b.timestamp)
                    .map((message) => (
                        <Message
                            key={message.timestamp}
                            message={message.textMessage}
                            timestamp={message.timestamp}
                            theirs={message.type === "incoming" ? true : false}
                        />
                    ))
                : ''
        }
    </div>
    )

}

export default ConversationsBody