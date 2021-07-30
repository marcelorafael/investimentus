import React, { useState, useEffect }  from 'react'
import { 
  Container, 
  CenterView, 
  Title,
  TextValues,
  ContainerCrypto,
  ContainerValues,
} from './BitcoinChartsPresenter.styles';
import { BitcoinCharts } from '../../components/BitcoinCharts';
import Stocks from '../../../../services/axios/GetDatas/Stocks';
import { View } from 'react-native';

const BitcoinChartsPresenter: React.FC = () => {
  const[cyrptos, useCyrptos] = useState([]);

  useEffect(() => {
    async function handleCoin() {
      const response = await Stocks('/?key=34664f77');

      const keys: any = Object.entries(response);
      const adapter: any = Object.values(keys[3][1]);
      // adapter[1][1]

      useCyrptos(adapter)

      console.log(adapter.map(item => item).sort())
    }
    handleCoin();
  },[]);

  return (
    <Container style={{flex: 1}}>
      <BitcoinCharts title="Crypto Moedas">
        <CenterView>
          {cyrptos.map((item: any) => (
            <ContainerValues>
              <Title>{item.name === 'Blockchain.info' ? 'Bitcoin' : item.name}</Title>
              <ContainerCrypto>
                <View>
                  <TextValues>Compra</TextValues>
                  <TextValues>{typeof item.buy === 'undefined' ? '-' : item.buy}</TextValues>
                </View>

                <View>
                  <TextValues>venda</TextValues>
                  <TextValues>{typeof item.sell === 'undefined' ? '--' : item.sell}</TextValues>
                </View>

                <View>
                  <TextValues>Variação</TextValues>
                  <TextValues>{item.variation}</TextValues>
                </View>
              </ContainerCrypto>
            </ContainerValues>
          ))}
        </CenterView>
      </BitcoinCharts>
    </Container>
  )
}
const BitcoinChartsPresenterMemo = React.memo(BitcoinChartsPresenter);
export { BitcoinChartsPresenterMemo as BitcoinChartsPresenter }