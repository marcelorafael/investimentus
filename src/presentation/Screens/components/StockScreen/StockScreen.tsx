import React, { useState, useRef, useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native';
import { Animated } from 'react-native'
import { format } from 'date-fns'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  Container,
  Footer,
  DateFormat,
  TextFooter,
  Input,
  Header,
  BtnSearch,
  CenterView,
} from './StockScreen.styles';
import { DetailsCurrencie } from '../../../Base/components/DetailsCurrencie';

const date = format(new Date(), 'dd/MM/yyyy');

console.log(date)

const StockScreen: React.FC = () => {
  const [centerView, setCenterView] = useState(false);
  const [activity, setActivity] = useState(true);


  return (
    <Container>
      <Header>
        <Input
        />
        <BtnSearch>
          <Icon name="search" color="#FFF" size={20} />
        </BtnSearch>
      </Header>

      <CenterView>
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
      </CenterView>

      <Footer>
        <DateFormat>{date}</DateFormat>
        <TextFooter>Saíba tudo sobre uma determina ação aqui.</TextFooter>
      </Footer>
    </Container>
  )
}
const StockScreenMemo = React.memo(StockScreen);
export { StockScreenMemo as StockScreen }