import { renderWithProviders } from '@/presentation/tests/utils'
import React from 'react'

import 'setimmediate'
import { InfoCurrencyPresenter } from './InfoCurrencyPresenter'

describe('container/InfoCurrencyPresenter', () => {
  it('should match snapshot', () => {
    const sut = <InfoCurrencyPresenter />

    const render = renderWithProviders(sut)

    expect(render).toMatchSnapshot()
  })
})
