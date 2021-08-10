import React from 'react'
import renderer from 'react-test-renderer'
import { InfoCurrencie } from './InfoCurrencie'

describe('Screens/InfoCurrencie', () => {
  it('should match snapshot', () => {
    const sut = <InfoCurrencie title="" buy="" sell="" variation="" />

    const renderComponent = renderer.create(sut)

    expect(renderComponent).toMatchSnapshot()
  })
})
