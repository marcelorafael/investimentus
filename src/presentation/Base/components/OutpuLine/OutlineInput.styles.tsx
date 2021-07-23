import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { theme } from '../../../../../constants';

const returnColor = (value: string, isFocused: boolean, error: boolean, disable: boolean) => {
  if (disable) return theme?.COLORS?.gray ?? 'gray'
  else if (error) return theme?.COLORS?.red ?? 'red'
  else if (isFocused) return theme?.COLORS?.green ?? 'green'
  else if (value !== '') return theme?.COLORS?.greenNepherit ?? '#00a877'
  else return theme?.COLORS?.white ?? '#f2f2f2'
}

export const Container = styled.View`
position: relative;
margin-top: 4px;
`;

export const LabelContainer = styled(Animated.View)`
${({ theme }) => theme?.FONTS?.oswald ?? {}};
position: absolute;
left: 12px;
top: 14px;
z-index: 2;
padding-left: 4px;
padding-right: 4px;
background-color: ${({ theme }) => theme?.COLORS?.gray ?? '#CCC'};
`;

interface LabelProps {
  isfocused: boolean
  value: string
  error: boolean
  disable: boolean
}

export const Label = styled.Text<LabelProps>`
${({ theme }) => theme?.FONTS?.oswald ?? {}};
color: ${({ theme, isfocused, value, error, disable }) => returnColor(value, isfocused, error, disable)};
`;