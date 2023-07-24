'use client'
import { useRef, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Customize swiper
import './styles/swiper.css'

import styles from './styles/postimage.module.css'
import Image from 'next/image'

import post from '@/assets/post/post.jpg'

export default function PostImage() {
  return (
    <Swiper
      pagination={{
        type: 'fraction'
      }}
      navigation={false}
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      <SwiperSlide className={styles.slide}>
        <Image src={post} alt='' priority={false} width='auto' height='auto' />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src={post} alt='' priority={false} width='auto' height='auto' />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src={post} alt='' priority={false} width='auto' height='auto' />
      </SwiperSlide>
    </Swiper>
  )
}
