import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
// 218c74 - 26, 255, 146,
export const Container = styled(LinearGradient).attrs({
  colors: ['#7F5DF0', '#000']
})`
  width: 100%;
`

export const Title = styled.Text`
  ${({ theme }) => theme?.FONTS?.robotoThin ?? {}}
  text-align: center;
  color: ${({ theme }) => theme?.COLORS?.white ?? '#fff'};
  background-color: #000;
  padding-bottom: 3px;
  font-size: 15px;
`

// background-color: ${props => props?.theme?.COLORS?.greenFocused ?? ''};
