import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors:['#218c74','#5D2DFD']
})`

width: 100%;
`;

// background-color: ${props => props?.theme?.COLORS?.greenFocused ?? ''};