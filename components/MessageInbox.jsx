import { Badge } from '@nextui-org/badge'
import { Avatar } from '@nextui-org/avatar'

export default function MessageInbox({
  content,
  profileImage,
  username,
  lastMessage
}) {
  return (
    <div className='mt-5 rounded-xl w-11/12 flex flex-row gap-5'>
      <Badge content={content} color='primary'>
        <Avatar radius='full' size='lg' src={profileImage} />
      </Badge>
      <div className='flex flex-col'>
        <p>
          <span>{username}</span>
        </p>
        <p>{lastMessage}</p>
      </div>
    </div>
  )
}
