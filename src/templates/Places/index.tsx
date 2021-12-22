import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://my-trips.com.br"
        openGraph={{
          url: 'https://my-trips.com.br',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips.willianjusten.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>
            <h1>{place.name}</h1>
          </S.Heading>
          <S.Body>
            <div
              dangerouslySetInnerHTML={{
                __html: place.description?.html || ''
              }}
            />
          </S.Body>
          <S.Gallery>
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
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
