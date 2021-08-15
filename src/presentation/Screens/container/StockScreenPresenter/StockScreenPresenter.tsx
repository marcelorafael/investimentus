import React, { useState } from 'react'
import { StatusBar, ActivityIndicator, Keyboard, View } from 'react-native'
import { StockScreen } from '../../components/StockScreen'
import { Container, TextBody } from './StockScreenPresenter.styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { DetailsCurrencie } from '../../../Base/components/DetailsCurrencie'

import { KEY_API_HG } from '@env'

import Stocks from '../../../../services/axios/GetDatas/Stocks'
import { Alert } from 'react-native'

const StockScreenPresenter: React.FC = () => {
  const [centerView, setCenterView] = useState(false)
  const [activity, setActivity] = useState(false)
  const [value, setValue] = useState('')
  const [result, setResult] = useState([])

  async function handleStock(data: string) {
    Keyboard.dismiss()
    if (value === '') {
      return Alert.alert(
        'Investimentus Alerta!!!',
        'Preencha o campo de busca.'
      )
    }
    setActivity(activity ? true : true)
    setCenterView(false)
    setValue('')

    try {
      const stock = await Stocks(
        `/stock_price?key=${KEY_API_HG}&symbol=${data}`
      )

      const keys: any = Object.entries(stock)

      let adapter: any = []

      adapter = [
        {
          name: keys[0][1].name,
          companyName: keys[0][1].company_name,
          percent: keys[0][1].change_percert,
          close: keys[0][1].market_time.close,
          open: keys[0][1].market_time.open,
          currency: keys[0][1].currency,
          description: keys[0][1].description,
          market_cap: keys[0][1].market_cap,
          price: keys[0][1].price,
          region: keys[0][1].region,
          symbol: keys[0][1].symbol
        }
      ]
      setResult(adapter)

      setCenterView(true)

      console.log(stock)
    } catch (error) {
      console.log(error)
      setCenterView(false)
      setActivity(false)
      Alert.alert(
        'Investimentus Alerta!!',
        'não foi possível fazer a busca com os dados informados'
      )
    }
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <StockScreen
        onPress={() => handleStock(value)}
        placeholder="exemplo: bidi4..."
        onChangeText={(text: string) => setValue(text)}
        value={value}
      >
        <View style={{ marginTop: 10 }}>
          {centerView === false ? (
            activity ? (
              <ActivityIndicator color="#37E39F" size={60} />
            ) : (
              <View style={{ alignItems: 'center' }}>
                <Icon name="usd" color="#FFF" size={100} />
                <TextBody>Investimentus</TextBody>
              </View>
            )
          ) : (
            <>
              {result.map((item: any) => (
                <DetailsCurrencie
                  key={item.name}
                  change_percert={item.change_percent}
                  close={item.close}
                  open={item.open}
                  company_name={item.companyName}
                  currency={item.currency}
                  description={item.description}
                  market_cap={item.market_cap}
                  name={item.name}
                  price={item.price}
                  region={item.region}
                  symbol={item.symbol}
                />
              ))}
            </>
          )}
        </View>
      </StockScreen>
    </Container>
  )
}
const StockScreenPresenterMemo = React.memo(StockScreenPresenter)
export { StockScreenPresenterMemo as StockScreenPresenter }
