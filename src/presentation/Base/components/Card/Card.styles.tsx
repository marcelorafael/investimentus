import styled from 'styled-components/native'

interface WrapperProps {
  width: number | string
  height: number
  background: string
}

export const Wrapper = styled.View<WrapperProps>`
  border-radius: ${(props) => props?.theme?.SIZES?.radius ?? 12}px;
  background-color: ${(props) => props.background};
  padding: 20px;
  margin: 5px;

  height: ${(props) => props.height}px;
  width: ${(props) => props.width};
`
