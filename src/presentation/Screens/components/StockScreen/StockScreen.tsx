import React, { useState } from 'react'

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

const date = format(new Date(), 'dd/MM/yyyy');

interface StockScreenProps {
  value: string
  children: React.ReactElement
  placeholder: string
  onChangeText: () => void
  onPress: () => void
}

const StockScreen: React.FC<StockScreenProps> = (
  props: StockScreenProps
) => {
  const { value, placeholder, children, onChangeText, onPress } = props;


  return (
    <Container>
      <Header>
        <Input
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
        <BtnSearch onPress={onPress}>
          <Icon name="search" color="#FFF" size={20} />
        </BtnSearch>
      </Header>

      <CenterView>
        {children}
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