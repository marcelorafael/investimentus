import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
background-color: ${({theme}) => theme?.COLORS?.black ?? '#000'};

border-radius: 5px;
width: 90%;
height: 450px;
`;

export const Header = styled(LinearGradient).attrs({
  colors:['#000','#2c3e50']
})`
background-color: ${({theme}) => theme?.COLORS.asphalt ?? '#000'};

height: 40px;
width: 100%;

flex-direction: row;
justify-content: space-between;
align-items: center;

padding-left: 8px;
padding-right: 8px;

border-top-left-radius: 5px;
border-top-right-radius: 5px;
`;

export const CenterView = styled.View`
padding-left: 8px;
padding-right: 8px;
`;

export const Title = styled.Text`
${({theme}) => theme?.FONTS?.oswaldBold ?? {}}
color: ${({theme}) => theme?.COLORS?.white ?? '#FFF'};
`;

export const Touch = styled.TouchableOpacity``;