import React from 'react'
import { Container, Title } from './Home.styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Home Ok</Title>
    </Container>
  )
}
const HomeMemo = React.memo(Home);
export { HomeMemo as Home }