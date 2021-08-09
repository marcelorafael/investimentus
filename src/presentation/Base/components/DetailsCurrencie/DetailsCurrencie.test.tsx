import React from 'react'

import renderer from 'react-test-renderer'
import { DetailsCurrencie } from './DetailsCurrencie'

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

    const render = renderer.create(sut)

    expect(render).toMatchSnapshot()
  })
})
