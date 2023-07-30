'use client'

import { CldImage } from 'next-cloudinary'

import { useRef, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

import post from '@/assets/post/post.jpg'
import Image from 'next/image'
import { getCldImageUrl } from 'next-cloudinary'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Customize swiper
import './styles/swiper.css'

import styles from './styles/postimage.module.css'

export default function PostImage({ postImages }) {
  let sliderImages = []

  postImages.forEach((element) => {
    const url = getCldImageUrl({
      width: 960,
      height: 600,
      src: element.urlCloud.publicID
    })
    sliderImages.push(url)
  })
  console.log(sliderImages)

  return (
    <Swiper
      pagination={{
        type: 'fraction'
      }}
      navigation={false}
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      {sliderImages.map((image, index) => {
        return (
          <SwiperSlide key={index} className={styles.slide}>
            <Image src={image} width='500' height='600' alt='image post' />
          </SwiperSlide>
        )
      })}
      {/* {postImages.map((image, index) => {
        return (
          <SwiperSlide key={image.id} className={styles.slide}>
            <CldImage
              src={image.urlCloud.publicID}
              width='500'
              height='600'
              alt='image post'
            />
          </SwiperSlide>
        )
      })} */}
    </Swiper>
  )
}
