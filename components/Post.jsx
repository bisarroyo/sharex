import Image from 'next/image'

import { Divider } from '@nextui-org/divider'

import LikeBtn from '@/components/LikeBtn'
import IconComment from '@/components/CommentBtn'
import IconShare from '@/components/ShareBtn'
import BookmarkBtn from '@/components/BookmarkBtn'
import PostMenu from '@/components/PostMenu'

import profile from '@/assets/profile/profile.jpg'
import post from '@/assets/post/post.jpg'
import PostImage from './PostImage'

export default function Post({ postImages, profileImage, username }) {
  return (
    <section className='flex flex-col mt-3 w-full text-sm'>
      <Divider className='my-2' />
      <div className='flex flex-row justify-between mx-2 mb-2'>
        <div className='flex flex-row justify-end items-start gap-3'>
          <div className='w-8 h-8'>
            <Image
              className='rounded-full'
              src={profile}
              alt=''
              width={35}
              height={35}
              priority={false}
            />
          </div>
          <div className='text-base'>
            <p>bisarroyo</p>
          </div>
        </div>
        <div className='flex justify-end items-center mr-2'>
          <div className=''>
            <PostMenu />
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
        <Image src={post} alt='' priority={false} width='auto' height='auto' />
        {/* <PostImage postImages={postImages} /> */}
      </div>
      <div className='flex justify-between p-2'>
        <div className=''>
          <BookmarkBtn />
        </div>
        <div className='flex justify-center flex-row gap-3'>
          <IconShare />
          <IconComment />
          <LikeBtn />
        </div>
      </div>
    </section>
  )
}
