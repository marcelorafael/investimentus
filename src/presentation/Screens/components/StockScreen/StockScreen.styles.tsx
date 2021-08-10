import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

// background-color: ${props => props?.theme?.COLORS?.greenFocused ?? ''};

export const Container = styled(LinearGradient).attrs({
  colors: ['#000', '#7F5DF0']
})`
  flex: 1;
  justify-content: space-between;
`

// background-color: ${({theme}) => theme?.COLORS?.white ?? '#fff'};

// colors:['#accec6','#1a3f1a']
export const Footer = styled(LinearGradient).attrs({
  colors: ['#000', '#7F5DF0']
})`
  width: 100%;
  height: 15%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  justify-content: center;
`

export const DateFormat = styled.Text`
  ${({ theme }) => theme?.FONTS?.bullpen ?? {}}
  text-align: center;
  color: ${({ theme }) => theme?.COLORS?.white ?? '#FFF'};
`

export const TextFooter = styled.Text`
  ${({ theme }) => theme?.FONTS?.robotoThin ?? {}}
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme?.COLORS?.white ?? '#FFF'};
`

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`

export const Input = styled.TextInput`
  width: 80%;
  height: 50px;

  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;

  background-color: ${({ theme }) => theme?.COLORS?.white ?? '#fff'};
`

export const BtnSearch = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: ${({ theme }) => theme?.COLORS?.primary ?? '#fff'};
  width: 50px;
  height: 50px;

  align-items: center;
  justify-content: center;

  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`

export const CenterView = styled.View`
  align-items: center;
`
