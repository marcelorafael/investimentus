import React from 'react'
import { Container } from './StockScreen.styles'

const StockScreen: React.FC = () => {
  return (
    <Container></Container>
  )
}
const StockScreenMemo = React.memo(StockScreen);
export { StockScreenMemo as StockScreen }