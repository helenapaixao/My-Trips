import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellat
      odit, facere nisi recusandae magni possimus cum quaerat amet alias
      corporis suscipit. Ullam illum quam ipsam quae quo numquam ducimus.
    </S.Body>
  </S.Content>
)

export default AboutTemplate
