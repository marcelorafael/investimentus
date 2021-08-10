import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient).attrs({
  colors: ['#000', '#7F5DF0']
})`
  flex: 1;

  padding-left: 12px;
  padding-right: 12px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => theme?.FONTS?.bullpen ?? {}};
  color: ${({ theme }) => theme?.COLORS?.white ?? '#FFF'};
`
