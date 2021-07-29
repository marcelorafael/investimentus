import React from 'react'
import { StatusBar } from 'react-native';
import { 
  Container, 
  CenterView, 
  Header,
  Touch,
  Title,
} from './InfoCurrencyPresenter.styles'
import { InfoCurrencie } from '../../components/InfoCurrencie/InfoCurrencie';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'


const InfoCurrencyPresenter: React.FC = ({route}: any) => {
  const navigation = useNavigation();
  const {item} = route.params;
  console.log(item);
  return (
    <Container>
      <StatusBar backgroundColor="#218c74" />
      <Header>
        <Touch onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" color="#FFF" size={25} />
        </Touch>
        <Title>Investimentus</Title>
      </Header>
      
      <CenterView>
        <InfoCurrencie
          buy={item.buy}
          sell={item.sell}
          title={item.name}
          variation={item.variation}
        />
      </CenterView>
    </Container>
  )
}
const InfoCurrencyPresenterMemo = React.memo(InfoCurrencyPresenter);
export { InfoCurrencyPresenterMemo as InfoCurrencyPresenter };