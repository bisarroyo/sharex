import MessageInbox from '@/components/MessageInbox'
// import ModalMessages from '@/components/ModalMessages'

export default function Messages() {
  return (
    <main className='flex justify-center items-center flex-col py-5'>
      <h1>Messages</h1>
      <MessageInbox
        content='2'
        profileImage='https://i.pravatar.cc/150?u=a04258a2462d826712d'
        username='bisarroyo'
        lastMessage='mensaje de prueba'
      />
      <MessageInbox
        content='2'
        profileImage='https://i.pravatar.cc/150?u=a04258a2462d826712d'
        username='bisarroyo'
        lastMessage='mensaje de prueba'
      />
      <MessageInbox
        content='2'
        profileImage='https://i.pravatar.cc/150?u=a04258a2462d826712d'
        username='bisarroyo'
        lastMessage='mensaje de prueba'
      />
      <MessageInbox
        content='2'
        profileImage='https://i.pravatar.cc/150?u=a04258a2462d826712d'
        username='bisarroyo'
        lastMessage='mensaje de prueba'
      />
      <MessageInbox
        content='2'
        profileImage='https://i.pravatar.cc/150?u=a04258a2462d826712d'
        username='bisarroyo'
        lastMessage='mensaje de prueba'
      />
      {/* <ModalMessages /> */}
    </main>
  )
}
