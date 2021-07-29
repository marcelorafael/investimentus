import React from 'react'
import { Container, Header, Title, CenterView, Touch } from './Modal.styles'
import Icon from 'react-native-vector-icons/FontAwesome'

interface ModalProps {
  title: string
  children: React.ReactElement
  onClose: () => void
}

const Modal: React.FC<ModalProps> = (
  props: ModalProps
) => {
  const {title, children, onClose} = props;
  return (
    <Container>
      <Header>
        <Title>Teste</Title>
        <Touch>
          <Icon name="close" color="#FFF" size={20} />
        </Touch>
      </Header>
      <CenterView>
        {children}
      </CenterView>
    </Container>
  )
}
const ModalMemo = React.memo(Modal);
export { ModalMemo as Modal };