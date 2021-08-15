import React from 'react'

import { BitcoinChartsPresenter } from './BitcoinChartsPresenter'
import { renderWithProviders } from '../../../tests/utils'
import 'setimmediate'

describe('container/BitcoinChartsPresenter', () => {
  it('should match snapshot', () => {
    const sut = <BitcoinChartsPresenter />

    const render = renderWithProviders(sut)

    expect(render).toMatchSnapshot()
  })
})
