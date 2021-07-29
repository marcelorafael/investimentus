import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors:['#218c74','#000']
})`

width: 100%;
`;

export const Title = styled.Text`
${({theme}) => theme?.FONTS?.oswaldBold ?? {}}
text-align: center;
color: ${({theme}) => theme?.COLORS?.green ?? '#3Df'};
background-color: #000;
padding-bottom: 3px;
`;

// background-color: ${props => props?.theme?.COLORS?.greenFocused ?? ''};