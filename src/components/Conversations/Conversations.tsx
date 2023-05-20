import { FC, useState,useEffect} from "react";
import styles from './Conversations.module.css'
import MessageInput from "./MessageInput";
import ConversationNav from "./ConversationNav/ConversationNav";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { IMessage } from "../../model/IMessage";
import ChatSkeletons from "../ChatSkeletons/ChatSkeletons";
import chatIdToPhone from "../../utils/chatIdToPhone";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import ConversationsBody from "./ConversationsBody/ConversationsBody";
interface ConversationsProps {
    messages: IMessage[],
    isLoading: boolean
}
const newMessage=(chatId:string,text:string)=>{
  return {
        chatId: chatId,
        senderId: '',
        senderName: '',
        idMessage: '',
        textMessage: text,
        timestamp: new Date().getTime(),
        type: "outgoing",
    }
}
const Conversations: FC<ConversationsProps> = ({ messages, isLoading }) => {
    const [textMessageValue, setTextMessageValue] = useState('')
    const { fetchSendMessage, setMessages ,fetchGetNotification} = useActions()
    const { selectedContact } = useTypedSelector(state => state.contacts)
    const sendMessage = (ev: React.SyntheticEvent) => {
        ev.preventDefault()
        if(!textMessageValue)return
          if (selectedContact?.chatId) {
           setMessages([...messages,newMessage(selectedContact?.chatId,textMessageValue)])
            fetchSendMessage(selectedContact.chatId, textMessageValue)
        }
        setTextMessageValue('')
    }
    

    if (isLoading) {
        return (<ChatSkeletons />)
    }
    return (<div className={styles.conversationSection}>
        {selectedContact?.chatId ?
            <>
                <ConversationNav phone={chatIdToPhone(selectedContact?.chatId)} />
                <ConversationsBody messages={messages}/>
                <MessageInput
                    value={textMessageValue}
                    setValue={(value) => setTextMessageValue(value)}
                    sendMessage={sendMessage}
                />
            </> :<WelcomeScreen/>

        }

    </div>)
}

export default Conversations