import React, { useState, useEffect }  from 'react'
import { Container, CenterView, Title } from './BitcoinChartsPresenter.styles';
import { BitcoinCharts } from '../../components/BitcoinCharts';
import Stocks from '../../../../services/axios/GetDatas/Stocks';

const BitcoinChartsPresenter: React.FC = () => {

  useEffect(() => {
    async function handleCoin() {
      const response = await Stocks('/?key=34664f77');

      console.log(response.bitcoin)
    }
    handleCoin();
  },[])
  return (
    <Container style={{flex: 1}}>
      <BitcoinCharts title="Crypto Moedas">
        <CenterView>
          <Title>Bitcoin</Title>
        </CenterView>
      </BitcoinCharts>
    </Container>
  )
}
const BitcoinChartsPresenterMemo = React.memo(BitcoinChartsPresenter);
export { BitcoinChartsPresenterMemo as BitcoinChartsPresenter }