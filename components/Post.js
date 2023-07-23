import Image from 'next/image'

// options icon
import { SlOptions } from 'react-icons/sl'

// bookmark icon no saved
import { BsBookmarkFill } from 'react-icons/bs'

// bookmark icon saved post
import { BsBookmarkCheckFill } from 'react-icons/bs'

// No liked post icon
import { BsHeart } from 'react-icons/bs'

// Liked post icon
import { BsHeartFill } from 'react-icons/bs'

// Cooments Icon
import { BiComment } from 'react-icons/bi'

// Send Icon
import { PiShareFatLight } from 'react-icons/pi'

import styles from './styles/post.module.css'
import profile from '@/assets/profile/profile.jpg'
import post from '@/assets/post/post.jpg'

export default function Post({ postImage, profileImage }) {
  return (
    <section className={styles.post}>
      <div className={styles.head}>
        <div className={styles.head_left_side}>
          <div className={styles.head_image}>
            <Image
              src={profile}
              alt=''
              width={50}
              height={50}
              priority={false}
            />
          </div>
          <div className={styles.head_user}>
            <p>Username</p>
          </div>
        </div>
        <div className={styles.head_right_side}>
          <div className={styles.head_options}>
            <SlOptions />
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <Image src={post} alt='' priority={false} width='300px' height='auto' />
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_left_side}>
          <div className={styles.footer_save}>
            <BsBookmarkFill className={styles.icon} />
          </div>
        </div>
        <div className={styles.footer_right_side}>
          <div className={styles.footer_share}>
            <PiShareFatLight className={styles.icon} />
          </div>
          <div className={styles.footer_comment}>
            <BiComment className={styles.icon} />
          </div>
          <div className={styles.footer_like}>
            <BsHeart className={styles.icon} />
          </div>
        </div>
      </div>
    </section>
  )
}
