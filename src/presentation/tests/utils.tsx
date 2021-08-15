import React from 'react'

import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../constants'

interface WrapStyledProps {
  children: React.Component
}

const WrapStyled = (props: WrapStyledProps) => {
  const { children } = props
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const renderWithProviders = (
  component: React.ReactElement,
  options?: any
) => {
  return render(component, { wrapper: WrapStyled, ...options })
}
