import { AdvancedImage } from '@cloudinary/react'

// Import any actions required for transformations.
import { fill } from '@cloudinary/url-gen/actions/resize'

export default function useResize({ image, width, height }) {
  // image.resize(fill().width(width).height(height))
  image
  return <AdvancedImage cldImg={image} />
}
