import React, { useState, useEffect } from 'react'
import {
  Container,
  CenterView,
  Title,
  TextValues,
  ContainerCrypto,
  ContainerValues,
  ContainerChart
} from './BitcoinChartsPresenter.styles'

import { KEY_API_HG } from '@env'

import { BitcoinCharts } from '../../components/BitcoinCharts'
import Stocks from '../../../../services/axios/GetDatas/Stocks'
import { View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

import { ActivityScreen } from '../../../Base/components/ActivityScreen'

const BitcoinChartsPresenter: React.FC = () => {
  const [cyrptos, setCyrptos] = useState([])
  const [activity, setActivity] = useState(false)

  useEffect(() => {
    async function handleCoin() {
      try {
        const response = await Stocks(`/?key=${KEY_API_HG}`)

        const keys: any = Object.entries(response)
        const adapter: any = Object.values(keys[3][1])

        setCyrptos(adapter)

        setActivity(true)
        console.log(response)
      } catch (error) {
        console.log(error)
        setActivity(false)
      }
    }
    handleCoin()
  }, [])

  const chartConfig = {
    backgroundColor: '#7F5DF0',
    backgroundGradientFrom: '#5D2DFD',
    backgroundGradientTo: '#222',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726'
    }
  }

  const data = {
    labels: cyrptos.map((item: any) => item.name),
    datasets: [
      {
        data: cyrptos.map((item: any) => item.last)
      }
    ]
  }

  return (
    <Container style={{ flex: 1 }}>
      <BitcoinCharts title="Crypto Moedas">
        {activity !== true ? (
          <ActivityScreen name="bitcoin" size={100} />
        ) : (
          <CenterView>
            <ContainerChart>
              <Title>Gráfico de Valores - R$</Title>
              <LineChart
                data={data}
                width={320} // from react-native
                height={400}
                yAxisLabel="R$="
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={chartConfig}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
                verticalLabelRotation={55}
                horizontalLabelRotation={-55}
                withVerticalLabels={true}
              />
            </ContainerChart>
            {cyrptos.map((item: any) => (
              <ContainerValues key={`b-${item.variation}`}>
                <Title>
                  {item.name === 'Blockchain.info' ? 'Bitcoin' : item.name}
                </Title>
                <ContainerCrypto>
                  <View>
                    <TextValues>Compra</TextValues>
                    <TextValues>
                      {typeof item.last === 'undefined' ? '--' : item.last}
                    </TextValues>
                  </View>

                  <View>
                    <TextValues>venda</TextValues>
                    <TextValues>
                      {typeof item.sell === 'undefined' ? '--' : item.sell}
                    </TextValues>
                  </View>

                  <View>
                    <TextValues>Variação</TextValues>
                    <TextValues>{item.variation}</TextValues>
                  </View>
                </ContainerCrypto>
              </ContainerValues>
            ))}
          </CenterView>
        )}
      </BitcoinCharts>
    </Container>
  )
}
const BitcoinChartsPresenterMemo = React.memo(BitcoinChartsPresenter)
export { BitcoinChartsPresenterMemo as BitcoinChartsPresenter }
