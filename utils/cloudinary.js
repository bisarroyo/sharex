// imports from cloudinary
import { Cloudinary } from '@cloudinary/url-gen'
const CLOUD_NAME = 'dlxx58bml'

export const API = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: CLOUD_NAME
  },
  url: {
    secure: true
  }
})
