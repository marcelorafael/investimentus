import React from 'react'
import { StatusBar, View } from 'react-native';
import { 
  Container, 
  CenterView, 
  Header,
  Touch,
  Title,
  TitleName,
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
      <StatusBar backgroundColor="#000" />
      <Header>
        <Touch onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" color="#FFF" size={20} />
        </Touch>
        <View style={{width:'100%', alignItems:'center'}}>
          <Title>Investimentus</Title>
          <TitleName>{item.name}</TitleName>
        </View>
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