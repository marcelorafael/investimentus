import styled from 'styled-components/native';

interface WrapperProps {
  width: number
  height: number
  background: string
}

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})<WrapperProps>`
border-radius: ${props => props?.theme?.SIZES?.radius ?? 12}px;
background-color: ${props => props.background};
padding: 20px;
margin: 5px;

height: ${props => props.height }px;
width: ${props => props.width}px;
`;