import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors:['#000','#7F5DF0','#000']
})`

width: 300px;
max-width: 400px;
max-height: 500px;

padding-top: 7px;
border-radius: ${props => props?.theme?.SIZES?.radius ?? 5}px;
`;

export const CenterView = styled.View`
padding-left: 20px;
padding-right: 20px;
`;

export const Title = styled.Text`
${props => props?.theme?.FONTS?.oswaldBold ?? {}}
color: ${props => props?.theme?.COLORS?.white ?? '#FFF'};
text-align: center;
`;

export const Description = styled.Text`
${props => props?.theme?.FONTS?.oswald ?? {}}
color: ${props => props?.theme?.COLORS?.white ?? '#FFF'};
`;

export const DescriptionTitle = styled.Text`
${props => props?.theme?.FONTS?.robotoThin ?? {}}
color: ${props => props?.theme?.COLORS?.white ?? '#FFF'};
`;

export const Footer = styled.View`
background-color: ${props => props?.theme?.COLORS?.lightGray1 ?? '#FFF'};
width: 100%;
min-height: 80px;
max-height: 200px;

border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
padding: 5px;
`;

export const DescriptionFooter = styled.Text`
${props => props?.theme?.FONTS?.oswald ?? {}}
color: ${props => props?.theme?.COLORS?.gray ?? '#FFF'};
`;

export const WrapperDescriptions = styled.View`
flex-direction: row;
justify-content: space-between;
margin-bottom: 7px;
`;