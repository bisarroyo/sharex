'use client'

import { CldImage } from 'next-cloudinary'

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

export default function PostImage({ postImages }) {
  return (
    <Swiper
      pagination={{
        type: 'fraction'
      }}
      navigation={false}
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      {postImages.map((image, index) => {
        return (
          <SwiperSlide key={index} className={styles.slide}>
            <CldImage
              src={image.urlCloud.publicID}
              width='500'
              height='600'
              sizes='100vw'
              alt='image post'
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
