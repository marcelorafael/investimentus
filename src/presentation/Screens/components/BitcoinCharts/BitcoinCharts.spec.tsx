import { renderWithProviders } from '@/presentation/tests/utils'
import React from 'react'

import { BitcoinCharts } from './BitcoinCharts'
import 'setimmediate'

describe('Screens/BitcoinCharts', () => {
  it('should match snapshot', () => {
    const sut = (
      <BitcoinCharts title="">
        <></>
      </BitcoinCharts>
    )

    const renderComponent = renderWithProviders(sut)

    expect(renderComponent).toMatchSnapshot()
  })
})
