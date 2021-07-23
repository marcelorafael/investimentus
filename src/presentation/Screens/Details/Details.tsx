import React from 'react'
import { Container } from './Details.styles'

const Details: React.FC = () => {
  return (
    <Container></Container>
  )
}
const DetailsMemo = React.memo(Details);
export { DetailsMemo as Details };