import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Header, Title } from './BitcoinCharts.styles'

interface BitcoinChartsProps {
  title: string
  children: React.ReactElement
}

const BitcoinCharts: React.FC<BitcoinChartsProps> = (
  props: BitcoinChartsProps
) => {
  const { children, title } = props
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon name="bitcoin" color="#FFF" size={32} />
      </Header>
      {children}
    </Container>
  )
}
const BitcoinChartsMemo = React.memo(BitcoinCharts)
export { BitcoinChartsMemo as BitcoinCharts }
