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
// 218c74
export const CenterViewCard = styled(LinearGradient).attrs({
  colors:['#000','#7F5DF0']
})`
flex: 1;
align-items: center;
border-radius: 5px;
`;

export const TextUSD = styled.Text`
${({theme}) => theme?.FONTS?.oswald ?? {}}
text-align: center;
color: ${({theme}) => theme?.COLORS?.white ?? '#FFF'};
`;

export const TitleUSD = styled.Text`
${({theme}) => theme?.FONTS?.oswaldBold ?? {}}
text-align: center;
color: ${({theme}) => theme?.COLORS?.white?? '#FFF'};
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

export const CenterViewCurrencie = styled.View`
margin-bottom: 5px;
`;

export const ContainerTextCurrencie = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
width: 100%;
height: 60px;
border-bottom-width: 1px;
border-bottom-color: #eed9d9;

flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 5px;
`;

export const TextCurrencie = styled.Text`
${({theme}) => theme?.FONTS?.oswald ?? {}};
color: ${({theme}) => theme?.COLORS?.white ?? '#FFF'};
`;