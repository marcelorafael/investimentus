import React, { useState } from 'react'
import { StatusBar, ActivityIndicator } from 'react-native'
import { StockScreen } from '../../StockScreen'
import { Container } from './StockScreenPresenter.styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import { DetailsCurrencie } from '../../../../../Base/components/DetailsCurrencie';
import { Alert } from 'react-native';

const StockScreenPresenter: React.FC = () => {

  const [centerView, setCenterView] = useState(false);
  const [activity, setActivity] = useState(false);
  const[teste, setTeste] = useState('')

  const handleStock = () => {
    return Alert.alert('Investimentus','teste')
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#218c74" />
      <StockScreen 
        onPress={() => handleStock()}
        placeholder="exemplo: bidi4..."
        onChangeText={(text: string) => setTeste(text)}
        value={teste}
      >
        <>
        {
          centerView === false
            ? activity
              ? <ActivityIndicator color="#37E39F" size={60} />
              : <Icon name="usd" color="#FFF" size={100} />
            : <>
              <DetailsCurrencie
                change_percert=""
                close=""
                open=""
                company_name=""
                currency=""
                description=""
                market_cap=""
                name=""
                price=""
                region=""
                symbol=""
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