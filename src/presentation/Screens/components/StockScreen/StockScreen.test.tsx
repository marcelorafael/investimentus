import React from 'react'
import renderer from 'react-test-renderer'
import { StockScreen } from './StockScreen'

describe('Screens/StockScreen', () => {
  it('should match snapshot', () => {
    const sut = (
      <StockScreen
        onChangeText={() => {}}
        onPress={() => {}}
        placeholder=""
        value=""
      >
        <></>
      </StockScreen>
    )

    const renderComponent = renderer.create(sut)

    expect(renderComponent).toMatchSnapshot()
  })
})
