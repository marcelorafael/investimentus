import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Container,
  Title,
  CenterView,
  Description,
  Footer,
  DescriptionFooter,
  DescriptionTitle,
  WrapperDescriptions
} from './DetailsCurrencie.styles'

interface DetailsCurrencieProps {
  symbol: string
  name: string
  open: string
  close: string
  market_cap: string
  price: string
  change_percert: string
  description: string
  region: string
  currency: string
  company_name: string
}

const DetailsCurrencie: React.FC<DetailsCurrencieProps> = (
  props: DetailsCurrencieProps
) => {
  const {
    currency,
    description,
    region,
    change_percert,
    close,
    company_name,
    market_cap,
    name,
    open,
    price,
    symbol
  } = props
  return (
    <Container style={{ ...styles.shadow }}>
      <Title>{company_name}</Title>
      <Title>R$ = {price}</Title>
      <CenterView>
        <WrapperDescriptions>
          <Description>{name}</Description>
          <Description>{symbol}</Description>
        </WrapperDescriptions>

        <WrapperDescriptions>
          <View>
            <DescriptionTitle>Moeda</DescriptionTitle>
            <Description>{currency}</Description>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <DescriptionTitle>Região</DescriptionTitle>
            <Description>{region}</Description>
          </View>
        </WrapperDescriptions>

        <WrapperDescriptions>
          <View>
            <DescriptionTitle>Abertura</DescriptionTitle>
            <Description>{close}h</Description>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <DescriptionTitle>Fechamento</DescriptionTitle>
            <Description>{open}h</Description>
          </View>
        </WrapperDescriptions>

        <WrapperDescriptions>
          <View>
            <DescriptionTitle>Percentual</DescriptionTitle>
            <Description>{change_percert}%</Description>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <DescriptionTitle>Valor de Mercado</DescriptionTitle>
            <Description>R$ = {market_cap}</Description>
          </View>
        </WrapperDescriptions>
      </CenterView>
      <Footer>
        <DescriptionFooter>{description}</DescriptionFooter>
      </Footer>
    </Container>
  )
}
const DetailsCurrencieMemo = React.memo(DetailsCurrencie)
export { DetailsCurrencieMemo as DetailsCurrencie }

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#27ae60',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.35,
    shadowRadius: 4.65,

    elevation: 8
  }
})
