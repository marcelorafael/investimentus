import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
`;

export const TextBody = styled.Text`
${({ theme }) => theme?.FONTS?.bullpen ?? {}}
color: ${({theme}) => theme?.COLORS?.white ?? '#FFF'};
margin-top: 10px;
`;

export const TextDetails = styled.Text`
${({ theme }) => theme?.FONTS?.oswald ?? {}}
color: ${({theme}) => theme?.COLORS?.white ?? '#FFF'};
margin-top: 10px;
`;