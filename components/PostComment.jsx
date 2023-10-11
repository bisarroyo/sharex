import styles from './styles/postComment.module.css'

export default function PostComment({ user, comment }) {
  return (
    <div className='flex flex-row gap-3 mx-4'>
      <div className={styles.textComment}>
        <span className='font-bold'>{user}</span> {comment}
      </div>
    </div>
  )
}
