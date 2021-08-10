import theme from './constants/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme extends Theme {}
}
