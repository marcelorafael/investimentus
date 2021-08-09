import React from 'react'

import renderer from 'react-test-renderer'
import { ChartHeader } from './ChartHeader'

describe('Base/ChartHeader', () => {
  it('should match snapshot', () => {
    const sut = (
      <ChartHeader datasets={[{ data: [12, 12, 12] }]} labels={[]} title="" />
    )

    const render = renderer.create(sut)

    expect(render).toMatchSnapshot()
  })
})
