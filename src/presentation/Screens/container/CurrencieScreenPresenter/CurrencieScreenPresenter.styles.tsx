import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ScrollView`
flex: 1;
`;

export const TextTaxes = styled.Text`
${({theme}) => theme?.FONTS?.oswald ?? {}}
text-align: center;
color: ${({theme}) => theme?.COLORS?.white ?? '#FFF'};
`;

export const CenterView = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const CenterViewCard = styled(LinearGradient).attrs({
  colors:['#000','#218c74']
})`
flex: 1;
align-items: center;
border-radius: 5px;
`;

export const TextUSD = styled.Text`
${({theme}) => theme?.FONTS?.oswald ?? {}}
text-align: center;
color: ${({theme}) => theme?.COLORS?.green ?? '#FFF'};
`;

export const TitleUSD = styled.Text`
${({theme}) => theme?.FONTS?.oswaldBold ?? {}}
text-align: center;
color: ${({theme}) => theme?.COLORS?.green?? '#FFF'};
font-size: 18px;
`;

export const CenterViewUSD = styled.View`
flex: 1;
flex-direction: row;
justify-content: space-between;
`;

export const ContainerTextUSD = styled.View`
height: 100%;
align-items: center;
justify-content: flex-end;
`;