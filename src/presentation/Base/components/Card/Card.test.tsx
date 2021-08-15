import React from 'react'
import { renderWithProviders } from '../../../tests/utils'

import { Card } from './Card'
import 'setimmediate'

describe('Base/Card', () => {
  it('should match snapshot', () => {
    const sut = (
      <Card background="#000" height={50} width={50}>
        <></>
      </Card>
    )

    const render = renderWithProviders(sut)

    expect(render).toMatchSnapshot()
  })
})
