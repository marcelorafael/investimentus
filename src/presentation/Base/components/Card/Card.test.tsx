import React from 'react'

import renderer from 'react-test-renderer'
import { Card } from './Card'

describe('Base/Card', () => {
  it('should match snapshot', () => {
    const sut = (
      <Card background="#000" height={50} width={50}>
        <></>
      </Card>
    )

    const render = renderer.create(sut)

    expect(render).toMatchSnapshot()
  })
})
