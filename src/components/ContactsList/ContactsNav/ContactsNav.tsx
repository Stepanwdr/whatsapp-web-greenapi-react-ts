import { FC } from "react";
import styles from './ContactsNav.module.css'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import NotificationsIcon from '@mui/icons-material/Notifications';
interface ContactsNav{
  logOut:()=>void,
  oNotificationClick:()=>void,
  openDialog:(open:boolean)=>void
}
const ContactsNav: FC<ContactsNav> = ({logOut,openDialog,oNotificationClick}) => {
  return (
    <div className={styles.navContainer}>
      <button className={styles.navBtn}>
        <AccountCircleIcon sx={{ fontSize: 50 }} className={`${styles.avatarIcon}`} />
      </button>
      <div className={styles.contactActions}>
        <button className={styles.navBtn} title={'Check new notification'} onClick={oNotificationClick}>
          <NotificationsIcon sx={{ fontSize: 22 }} className={`${styles.icon}`} />
        </button>
        <button className={styles.navBtn} title={'Add contact'} onClick={()=>openDialog(true)}>
          <PersonAddAlt1Icon sx={{ fontSize: 22 }} className={`${styles.icon}`} />
        </button>
        <button className={styles.navBtn} title={'Log out'} onClick={logOut}>
          <LogoutIcon sx={{ fontSize: 22 }} className={styles.icon} />
        </button>
      </div>
    </div>
  )
}
export default ContactsNav