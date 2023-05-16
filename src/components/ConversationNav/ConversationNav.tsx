import { FC } from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import styles from './ConversationNav.module.css'
interface ConversationNav{
  phone:string
}
const ConversationNav: FC<ConversationNav> = ({phone}) => {
  return (
    <div className={styles.navContainer}>
      <button className={styles.navBtn}>
        <AccountCircleIcon  sx={{fontSize:50}} className={`${styles.icon} ${styles.avatarIcon}`} />
        <span className={styles.userName}>{phone}</span>    
      </button>
      <button className={styles.navBtn}>
        <InfoIcon sx={{fontSize:30}} className={styles.icon} />
      </button>
    </div>
  )
}
export default ConversationNav