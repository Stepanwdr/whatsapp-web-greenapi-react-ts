import { FC } from "react";
import { IMessage } from "../../model/IMessage";
import styles from './ConversationsBody.module.css'
import Message from "../Message/Message";
interface ConversationsBodyProps {
    messages: IMessage[]
}
const ConversationsBody: FC<ConversationsBodyProps> = ({ messages }) => {
    return (<div className={styles.conversationBody}>
        {
            messages.length ?
                messages
                    .sort((a, b) => a.timestamp - b.timestamp)
                    .map((message) => (
                        <Message
                            key={message?.idMessage}
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