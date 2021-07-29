import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`

justify-content: flex-end;
align-items: center;
`;

export const Header = styled.View`
width: 100%;

flex-direction: row;
align-items: center;
justify-content: space-between;

padding-left: 12px;
padding-right: 12px;

margin-top: 10px;
`;

export const CenterView = styled.View`
margin-top: 8px;
align-items: center;

padding-left: 12px;
padding-right: 12px;

flex-direction: row;
justify-content: space-between;
`;

export const Title = styled.Text`
${({theme}) => theme?.FONTS?.oswaldBold ?? {}}
color: ${({theme}) => theme?.COLORS?.white ?? '#FFF'};
text-align: center;
margin-top: 10px;
`;

export const TextCurrency = styled.Text`
${({theme}) => theme?.FONTS?.oswaldBold ?? {}}
color: ${({theme}) => theme?.COLORS?.white ?? '#FFF'};
text-align: center;
`;

export const TextCenter = styled.Text`
${({theme}) => theme?.FONTS?.oswald ?? {}}
color: ${({theme}) => theme?.COLORS?.white ?? '#FFF'};
`;

export const ImgMoney = styled.Image`
width: 180px;
height: 180px;

margin-bottom: 50px;
`;

export const FooterCard = styled(LinearGradient).attrs({
  colors:['#000','#7F5DF0']
})`
width: 90%;
padding: 10px;
margin: 10px;

border-radius: 5px;
`;