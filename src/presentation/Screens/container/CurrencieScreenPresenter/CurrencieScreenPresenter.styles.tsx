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

export const CenterViewCard = styled(LinearGradient).attrs({
  colors:['#000','#218c74']
})`
flex: 1;
align-items: center;
justify-content: center;
border-radius: 5px;
`;