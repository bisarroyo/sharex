'use client'

import styles from './styles/postimage.module.css'
import SwiperComponent from './SwiperComponent'

export default function PostImage({ postImages }) {
  let sliderImages = []

  // postImages.forEach((element) => {
  //   const url = getCldImageUrl({
  //     width: 960,
  //     height: 600,
  //     src: element.urlCloud.publicID
  //   })
  //   sliderImages.push(url)
  // })

  return <SwiperComponent images={sliderImages} />
}
