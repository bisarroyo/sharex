'use client'

import { getCldImageUrl } from 'next-cloudinary'
// import SwiperComponent from './SwiperComponent'

import Image from 'next/image'

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
import { useState, useEffect } from 'react'

export default function PostImage({ postImages }) {
  const [sliderImages, setSliderImages] = useState([])

  useEffect(() => {
    const processedImages = postImages.map((element) => {
      return getCldImageUrl({
        width: 960,
        height: 'auto',
        src: element
      })
    })
    setSliderImages(processedImages)
  }, [postImages])

  return (
    <Swiper
      pagination={{
        type: 'fraction'
      }}
      navigation={false}
      modules={[Pagination, Navigation]}
      className='mySwiper'
      style={{ width: '100%', height: '100%' }}
    >
      {sliderImages.map((file, index) => (
        <SwiperSlide key={index}>
          <Image
            src={file}
            alt='Archivo seleccionado'
            fill={true}
            style={{ objectFit: 'contain' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
