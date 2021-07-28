import styled from 'styled-components/native';

export const Container = styled.ScrollView`
flex: 1;
`;

export const TextTaxes = styled.Text`
${({theme}) => theme?.FONTS?.oswald ?? {}}
text-align: center;
`;

export const CenterViewCard = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;