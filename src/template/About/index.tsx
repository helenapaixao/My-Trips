import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Component>
    <LinkWrapper href="*">
      <CloseOutline size={32} />
    </LinkWrapper>
  </S.Component>
)

export default AboutTemplate
