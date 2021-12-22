import Image from 'next/image'
import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <h1>{place.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
      {place.gallery.map((image, index) => (
        <Image
          key={`photo-${index}`}
          src={image.url}
          alt={place.name}
          width={image.width}
          height={image.height}
          quality={75}
        />
      ))}
    </>
  )
}
