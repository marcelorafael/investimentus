import React from 'react'

import renderer from 'react-test-renderer'
import { ActivityScreen } from './ActivityScreen'

describe('Base/ActivityScreen', () => {
  it('should match snapshot', () => {
    const sut = <ActivityScreen name="bitcoin" size={50} title="" />

    const render = renderer.create(sut)

    expect(render).toMatchSnapshot()
  })
})
