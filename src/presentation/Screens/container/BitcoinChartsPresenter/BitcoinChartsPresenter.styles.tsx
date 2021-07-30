import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
`;

export const Title = styled.Text`
${({theme}) => theme?.FONTS?.oswald ?? {}}
color: ${({theme}) => theme?.COLORS?.white ?? '#fff'};
`;

export const CenterView = styled.View``;