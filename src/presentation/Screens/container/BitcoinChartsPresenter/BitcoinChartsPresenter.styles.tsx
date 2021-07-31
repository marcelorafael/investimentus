import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
`;

export const Title = styled.Text`
${({theme}) => theme?.FONTS?.oswald ?? {}}
color: ${({theme}) => theme?.COLORS?.white ?? '#fff'};
font-size: 15px;
margin-top: 8px;
text-align: center;
`;

export const TextValues = styled.Text`
${({theme}) => theme?.FONTS?.robotoThin ?? {}}
color: ${({theme}) => theme?.COLORS?.white ?? '#fff'};
margin-top: 8px;
`;

export const CenterView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
flex: 1;
margin-bottom: 15px;
`;

export const ContainerCrypto = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 8px;

height: 80px;
`;

export const ContainerValues = styled.View`
flex: 1;
justify-content: space-between;

border-top-width: 1px;
border-top-color: #FFF;
`;

export const ContainerChart = styled.View`
width: 100%;
align-items: center;
`;