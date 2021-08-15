import React from 'react'

import { renderWithProviders } from '../../../tests/utils'
import { ActivityScreen } from './ActivityScreen'
import 'setimmediate'

describe('Base/ActivityScreen', () => {
  it('should match snapshot', () => {
    const sut = <ActivityScreen name="bitcoin" size={50} title="" />

    const render = renderWithProviders(sut)

    expect(render).toMatchSnapshot()
  })
})
