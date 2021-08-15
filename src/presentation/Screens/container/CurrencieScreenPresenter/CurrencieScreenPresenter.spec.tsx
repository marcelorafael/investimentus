import React from 'react'

import { renderWithProviders } from '@/presentation/tests/utils'

import { CurrencieScreenPresenter } from './CurrencieScreenPresenter'
import 'setimmediate'

describe('container/CurrencieScreenPresenter', () => {
  it('should match snapshot', () => {
    const sut = <CurrencieScreenPresenter />

    const render = renderWithProviders(sut)

    expect(render).toMatchSnapshot()
  })
})
