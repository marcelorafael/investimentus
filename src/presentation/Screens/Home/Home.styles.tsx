import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: ${props => props?.theme?.COLORS?.black ?? '#030009'};
`;

export const Title = styled.Text`
${props => props?.theme?.FONTS?.oswald ?? {}}
color: ${props => props?.theme?.COLORS?.white ?? '#FFF'};
`;