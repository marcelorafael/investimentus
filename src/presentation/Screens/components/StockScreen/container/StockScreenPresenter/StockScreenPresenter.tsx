import React, { useState } from 'react'
import { StatusBar, ActivityIndicator, Keyboard, View } from 'react-native'
import { StockScreen } from '../../StockScreen'
import { 
  Container, 
  TextBody,
  TextDetails,
} from './StockScreenPresenter.styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import { DetailsCurrencie } from '../../../../../Base/components/DetailsCurrencie';

import Stocks from '../../../../../../services/axios/GetDatas/Stocks';
import { Alert } from 'react-native';

const StockScreenPresenter: React.FC = () => {

  const [centerView, setCenterView] = useState(false);
  const [activity, setActivity] = useState(false);
  const [value, setValue] = useState('');
  const [result, setResult] = useState(false);

  async function handleStock(data: string) {
    Keyboard.dismiss()
    if(value === '') { 
      return Alert.alert('Investimentus Alerta!!!','Preencha o campo de busca.'); 
    }
    setActivity(activity ? true : true)
    setCenterView(false)
    setValue('');1  

    try {
      const stock = await Stocks(`/stock_price?key=34664f77&symbol=${data}`);

      const keys: any = Object.entries(stock)

      const stockAdapter = () => {

        return [{
          percent: keys[0][1].change_percent,
          market_cap: keys[0][1].market_cap,
          name: keys[0][1].name,
          symbol:  keys[0][1].symbol,
          currency: keys[0][1].currency,
          price: keys[0][1].price,
          open: keys[0][1].market_time.open,
          close: keys[0][1].market_time.close,
          description: keys[0][1].description,
          companyName: keys[0][1].company_name,
          region: keys[0][1].region
        }]
      }

        let adapter: any = stockAdapter();

       setResult(adapter)

       setCenterView(true)
       
      console.log(stock)
    } catch (error) {
      console.log(error)
      setCenterView(false)
      setActivity(false)
      Alert.alert('Investimentus Alerta!!', 'não foi possível fazer a busca com os dados informados');
    }
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#218c74" />
      <StockScreen 
        onPress={() => handleStock(value)}
        placeholder="exemplo: bidi4..."
        onChangeText={(text: string) => setValue(text)}
        value={value}
      >
        <>
        {
          centerView === false
            ? activity
              ? <ActivityIndicator color="#37E39F" size={60} />
              : <View style={{alignItems:'center'}}>
                  <Icon name="usd" color="#FFF" size={100} />
                  <TextBody>Investimentus</TextBody>
                </View>
            : <>
              <DetailsCurrencie
                change_percert={result[0].percent}
                close={result[0].close}
                open={result[0].open}
                company_name={result[0].companyName}
                currency={result[0].currency}
                description={result[0].description}
                market_cap={result[0].market_cap}
                name={result[0].name}
                price={result[0].price}
                region={result[0].region}
                symbol={result[0].symbol}
              />
            </>
        }
        </>
      </StockScreen>
    </Container>
  )
}
const StockScreenPresenterMemo = React.memo(StockScreenPresenter);
export { StockScreenPresenterMemo as StockScreenPresenter }