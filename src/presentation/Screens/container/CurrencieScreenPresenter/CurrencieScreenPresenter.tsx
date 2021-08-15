import React, { useEffect, useState } from 'react'
import { Keyboard, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card } from '../../../Base/components/Card'
import { ChartHeader } from '../../../Base/components/ChartHeader'

import { KEY_API_HG } from '@env'

import {
  Container,
  CenterScroll,
  ContainerActivity,
  CenterViewCard,
  CenterView,
  TextTaxes,
  TextCurrencie,
  CenterViewCurrencie,
  ContainerTextCurrencie
} from './CurrencieScreenPresenter.styles'
import Stocks from '../../../../services/axios/GetDatas/Stocks'
import { ActivityScreen } from '../../../Base/components/ActivityScreen'

const CurrencieScreenPresenter: React.FC = ({ navigation }: any) => {
  const [activity, setActivity] = useState(false)
  const [stocks, setStocks] = useState([])
  const [stocksName, setStocksName] = useState([])
  const [taxes, setTaxes] = useState([])
  const [currencie, setCurrencie] = useState([])

  useEffect(() => {
    async function handleStock() {
      Keyboard.dismiss()

      try {
        const response = await Stocks(`/?key=${KEY_API_HG}`)

        // Datas Stocks
        const keysStocks: any = Object.keys(response.stocks)
        setStocksName(keysStocks)
        const entriesStocks = Object.entries(response.stocks)

        let adapterStocks: any = []
        // adapterStocks = [{ data: entriesStocks.map((item: any) => item[1].points)}]
        adapterStocks = entriesStocks.map((item: any) => item[1].points)
        setStocks(adapterStocks)

        // Datas Taxes
        const adapterTaxes: any = [
          { id: '1', name: 'cdi', value: response.taxes[0].cdi },
          { id: '2', name: 'cdi dia', value: response.taxes[0].cdi_daily },
          { id: '3', name: 'fator dia', value: response.taxes[0].daily_factor },
          { id: '4', name: 'selic', value: response.taxes[0].selic },
          { id: '5', name: 'selic dia', value: response.taxes[0].selic_daily }
        ]

        setTaxes(adapterTaxes)

        // Datas Currencies
        // const keysCurrencies = Object.keys(response.currencies)
        const entrieCurrencies = Object.entries(response.currencies)
        const adapterCurrencies: any = entrieCurrencies.map((item) => item[1])
        // const teste = entrieCurrencies.map((item) => item[1])
        setCurrencie(adapterCurrencies)

        setActivity(true)

        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    handleStock()
  })

  return (
    <Container>
      {activity === false && (
        <ContainerActivity>
          <ActivityScreen size={100} name="euro" />
        </ContainerActivity>
      )}
      {activity && (
        <CenterScroll>
          <ChartHeader
            labels={stocksName.map((item: any) => item)}
            datasets={[{ data: stocks }]}
            title="Pontuação na bolsa"
          />

          <ScrollView
            style={{ marginTop: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {taxes.map((item: any) => (
              <Card key={item.id} background="#000" height={150} width={150}>
                <>
                  <TextTaxes>{item.name.toUpperCase()}</TextTaxes>
                  <CenterViewCard>
                    <Icon name="dollar" color="#e3e6e6" size={50} />
                    <TextTaxes>{item.value} %</TextTaxes>
                  </CenterViewCard>
                </>
              </Card>
            ))}
          </ScrollView>

          <CenterView>
            <Card background="#000" height={635} width="95%">
              <ContainerActivity>
                {currencie.map((item: any) => (
                  <CenterViewCurrencie key={item.name}>
                    {typeof item.name !== 'undefined' && (
                      <ContainerTextCurrencie
                        onPress={() =>
                          navigation.navigate('InfoCurrencyPresenter', {
                            item: item
                          })
                        }
                      >
                        <TextCurrencie>{item.name}</TextCurrencie>
                        <Icon name="chevron-right" color="#FFF" size={20} />
                      </ContainerTextCurrencie>
                    )}
                  </CenterViewCurrencie>
                ))}
              </ContainerActivity>
            </Card>
          </CenterView>
        </CenterScroll>
      )}
    </Container>
  )
}
const CurrencieScreenPresenterMemo = React.memo(CurrencieScreenPresenter)
export { CurrencieScreenPresenterMemo as CurrencieScreenPresenter }
