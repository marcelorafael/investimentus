import React from 'react'
import { renderWithProviders } from '../../../tests/utils'

import { ChartHeader } from './ChartHeader'
import 'setimmediate'

describe('Base/ChartHeader', () => {
  it('should match snapshot', () => {
    const sut = (
      <ChartHeader datasets={[{ data: [12, 12, 12] }]} labels={[]} title="" />
    )

    const render = renderWithProviders(sut)

    expect(render).toMatchSnapshot()
  })
})
