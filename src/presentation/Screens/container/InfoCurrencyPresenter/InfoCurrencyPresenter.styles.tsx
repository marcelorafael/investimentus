import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors:['#218c74','#7F5DF0']
})`
flex: 1;
`;
export const CenterView = styled.View`
flex: 1;
justify-content: flex-end;
`;

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 8px;
`;

export const Touch = styled.TouchableOpacity``;

export const Title = styled.Text`
${({theme}) => theme?.FONTS?.oswald ?? {}}
color: ${({theme}) => theme?.COLORS?.white ?? '#FFF'};
`;