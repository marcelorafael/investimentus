import React from 'react'
import { View } from 'react-native';
import { icons } from '../../../../../constants';
import {
  Container, Header, CenterView, TextCurrency,
  Title, TextCenter, ImgMoney, FooterCard,
} from './InfoCurrencie.styles';

interface InfoCurrencieProps {
  title: string
  variation: string
  buy: string
  sell: string
}

const InfoCurrencie: React.FC<InfoCurrencieProps> = (
  props: InfoCurrencieProps
) => {
  const { buy, sell, variation, title } = props;
  return (
    <Container>
      <ImgMoney source={icons.money} />
      <FooterCard>
        <Title>{title}</Title>
        <Header>
          <TextCurrency>R$ = {buy}</TextCurrency>
        </Header>
        <CenterView>
          <View>
            <TextCenter>Venda</TextCenter>
            <TextCenter>R$ = {sell}</TextCenter>
          </View>

          <View style={{ alignItems: 'flex-end' }}>
            <TextCenter>Variação</TextCenter>
            <TextCenter>{variation}</TextCenter>
          </View>
        </CenterView>
      </FooterCard>
    </Container>
  )
}
const InfoCurrencieMemo = React.memo(InfoCurrencie);
export { InfoCurrencieMemo as InfoCurrencie };