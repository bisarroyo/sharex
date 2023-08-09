'use client'
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

export default function SwiperComponent({ images }) {
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
      {images.map((file, index) => (
        <SwiperSlide key={index}>
          <Image
            src={URL.createObjectURL(file)}
            alt='Archivo seleccionado'
            fill={true}
            style={{ objectFit: 'contain' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
