import React from 'react'
import { Container } from './ChartHeader.styles'

const ChartHeader: React.FC = () => {
  return (
    <Container></Container>
  )
}
const ChartHeaderMemo = React.memo(ChartHeader);
export { ChartHeaderMemo as ChartHeader };