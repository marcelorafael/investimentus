import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
flex: 1;
background-color: ${props => props?.theme?.COLORS?.greenFocused ?? '#218c74'};
justify-content: space-between;
`;

export const Footer = styled.View`
background-color: ${({theme}) => theme?.COLORS?.white ?? '#fff'};
width: 100%;
height: 15%;
border-top-left-radius: 10px;
border-top-right-radius: 10px;

justify-content: center;
`;

export const DateFormat = styled.Text`
${({theme}) => theme?.FONTS?.bullpen ?? {}}
text-align: center;
`;

export const TextFooter = styled.Text`
${({theme}) => theme?.FONTS?.robotoThin ?? {}}
text-align: center;
font-size: 14px;
font-weight: bold;
color: ${({theme}) => theme?.COLORS?.asphalt ?? ''};
`;

export const Header = styled.View`
flex-direction: row;
width: 100%;
align-items: center;
justify-content: center;
margin-top: 8px;
`;

export const Input = styled.TextInput`
width: 80%;
height: 50px;

border-bottom-left-radius: 5px;
border-top-left-radius: 5px;

background-color: ${({theme}) => theme?.COLORS?.white ?? '#fff'};
`;

export const BtnSearch = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
background-color: ${({theme}) => theme?.COLORS?.green ?? '#fff'};
width: 50px;
height: 50px;

align-items: center;
justify-content: center;

border-bottom-right-radius: 5px;
border-top-right-radius: 5px;
`;

export const CenterView = styled.View`
align-items: center;
`;