import { FC, useEffect } from "react";
import Conversations from "../../components/Conversations/Conversations";
import styles from './Chat.module.css'
import ContactsList from "../../components/ContactsList/ContactsList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { fetchGetNotification } from "../../store/action-creators/message";

const Chat: FC = () => {
  const { contacts, selectedContact } = useTypedSelector(state => state.contacts)
  const { fetchChatHistory } = useActions()
  const { messages, isLoading } = useTypedSelector(state => state.message)

  useEffect(() => {
    if (selectedContact?.chatId) {
      fetchChatHistory(selectedContact?.chatId)
    }
  }, [selectedContact])

  return (
    <div className={`${styles.chatWrapper}`}>
      <div className={styles.leftSide}>
        <ContactsList contacts={contacts} />
      </div>

      <div className={styles.content}>
        <Conversations messages={messages} isLoading={isLoading} />
      </div>
    </div>
  )
}
export default Chat