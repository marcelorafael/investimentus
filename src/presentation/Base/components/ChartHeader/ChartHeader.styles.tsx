import styled from 'styled-components/native';
// import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`

`;

export const Header = styled.View`
background-color: ${props => props?.theme?.COLORS?.greenFocused ?? '#218c74'};
width: 100%;
height: 250px;
justify-content: flex-end;
`;