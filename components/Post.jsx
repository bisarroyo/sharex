import Image from 'next/image'

import LikeBtn from '@/components/LikeBtn'
import IconComment from '@/components/CommentBtn'
import IconShare from '@/components/ShareBtn'
import BookmarkBtn from '@/components/BookmarkBtn'

// options icon
import { SlOptions } from 'react-icons/sl'

import styles from './styles/post.module.css'
import profile from '@/assets/profile/profile.jpg'
import post from '@/assets/post/post.jpg'
import PostImage from './PostImage'

export default function Post({ postImages, profileImage, username }) {
  return (
    <section className={styles.post}>
      <div className={styles.head}>
        <div className={styles.head_left_side}>
          <div className={styles.head_image}>
            <Image
              src={profile}
              alt=''
              width={35}
              height={35}
              priority={false}
            />
          </div>
          <div className={styles.head_user}>
            <p>bisarroyo</p>
          </div>
        </div>
        <div className={styles.head_right_side}>
          <div className={styles.head_options}>
            <SlOptions />
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <Image src={post} alt='' priority={false} width='auto' height='auto' />
        {/* <PostImage postImages={postImages} /> */}
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_left_side}>
          <BookmarkBtn />
        </div>
        <div className={styles.footer_right_side}>
          <IconShare />
          <IconComment />
          <LikeBtn />
        </div>
      </div>
    </section>
  )
}
