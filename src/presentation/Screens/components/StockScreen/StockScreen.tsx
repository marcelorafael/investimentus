import React from 'react'

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
  CenterView
} from './StockScreen.styles'
import { Testable } from '../../../@types/components'

const date = format(new Date(), 'dd/MM/yyyy')

interface StockScreenPropsBase {
  value: string
  children: React.ReactElement
  placeholder: string
  // eslint-disable-next-line no-unused-vars
  onChangeText: (text: string) => void
  onPress: () => void
}

export type StockScreenProps = Testable<StockScreenPropsBase>

const StockScreen: React.FC<StockScreenProps> = (props: StockScreenProps) => {
  const { value, placeholder, children, onChangeText, onPress } = props

  return (
    <Container>
      <Header>
        <Input
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          testID="Screens/StockScreen/Input"
        />
        <BtnSearch onPress={onPress} testID="Screens/StockScreen/BtnSearch">
          <Icon name="search" color="#FFF" size={20} />
        </BtnSearch>
      </Header>

      <CenterView>{children}</CenterView>

      <Footer>
        <DateFormat>{date}</DateFormat>
        <TextFooter>Saíba tudo sobre uma determina ação aqui.</TextFooter>
      </Footer>
    </Container>
  )
}
const StockScreenMemo = React.memo(StockScreen)
export { StockScreenMemo as StockScreen }
