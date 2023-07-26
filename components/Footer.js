'use client'

import { usePathname } from 'next/navigation'

import styles from './styles/footer.module.css'

// home icon
import { RiHome2Line } from 'react-icons/ri'

// home icon fill
import { RiHome2Fill } from 'react-icons/ri'

// message icons
import { RiChat4Line } from 'react-icons/ri'

// message icon fill
import { RiChat4Fill } from 'react-icons/ri'

// profile icon
import { BsPerson } from 'react-icons/bs'

// profile icon fill
import { BsPersonFill } from 'react-icons/bs'

// create icon
import { BsPlusCircle } from 'react-icons/bs'

// create icon fill
import { BsPlusCircleFill } from 'react-icons/bs'

export default function Footer() {
  const path = usePathname()

  return (
    <footer className={styles.footer}>
      <div className={styles.home}>
        {path === '/' ? (
          <RiHome2Fill className={styles.homeIcon} />
        ) : (
          <RiHome2Line className={styles.homeIcon} />
        )}
      </div>
      <div className={styles.messages}>
        {path === '/upload' ? (
          <BsPlusCircle className={styles.createIcon} />
        ) : (
          <BsPlusCircleFill className={styles.createIcon} />
        )}
      </div>
      <div className={styles.messages}>
        {path === '/messages' ? (
          <RiChat4Fill className={styles.messagesIcon} />
        ) : (
          <RiChat4Line className={styles.messagesIcon} />
        )}
      </div>
      <div className={styles.profile}>
        {path === '/profile' ? (
          <BsPersonFill className={styles.profileIcon} />
        ) : (
          <BsPerson className={styles.profileIcon} />
        )}
      </div>
    </footer>
  )
}
