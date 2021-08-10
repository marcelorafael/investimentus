import React from 'react'
import renderer from 'react-test-renderer'
import { BitcoinCharts } from './BitcoinCharts'

describe('Screens/BitcoinCharts', () => {
  it('should match snapshot', () => {
    const sut = (
      <BitcoinCharts title="">
        <></>
      </BitcoinCharts>
    )

    const renderComponent = renderer.create(sut)

    expect(renderComponent).toMatchSnapshot()
  })
})
