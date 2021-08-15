import { renderWithProviders } from '@/presentation/tests/utils'
import React from 'react'

import { DetailsCurrencie } from './DetailsCurrencie'
import 'setimmediate'

describe('Base/DetailsCurrencie', () => {
  it('should match snapshot', () => {
    const sut = (
      <DetailsCurrencie
        name=""
        change_percert=""
        close=""
        company_name=""
        currency=""
        description=""
        market_cap=""
        open=""
        price=""
        region=""
        symbol=""
      />
    )

    const render = renderWithProviders(sut)

    expect(render).toMatchSnapshot()
  })
})
