import styles from './styles/notification.module.css'

// No notification Icon
import { BiNotification } from 'react-icons/bi'

// With notifications
import { BiSolidNotification } from 'react-icons/bi'

export default function Notification() {
  return (
    <div className={styles.notification}>
      <BiNotification />
    </div>
  )
}
