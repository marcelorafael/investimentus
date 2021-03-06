import React from 'react'

import * as Faker from 'faker'
import { StockScreen } from './StockScreen'
import 'setimmediate'
import { fireEvent } from '@testing-library/react-native'
import { renderWithProviders } from '@/presentation/tests/utils'

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

    const render = renderWithProviders(sut)

    expect(render).toMatchSnapshot()
  })

  it('should called when BtnSearch pressed', () => {
    const onClickSpy = jest.fn()
    const sut = (
      <StockScreen
        onChangeText={() => {}}
        onPress={onClickSpy}
        placeholder=""
        value=""
      >
        <></>
      </StockScreen>
    )

    const render = renderWithProviders(sut)
    const button = render.getByTestId('Screens/StockScreen/BtnSearch')

    fireEvent.press(button)
    expect(onClickSpy).toBeCalledTimes(1)
  })

  it('should call onChangeText when change value', () => {
    const onChangeSpy = jest.fn()
    const testChangeText = Faker.random.word()

    const sut = (
      <StockScreen
        onChangeText={onChangeSpy}
        onPress={() => {}}
        placeholder=""
        value=""
      >
        <></>
      </StockScreen>
    )

    const render = renderWithProviders(sut)
    const input = render.getByTestId('Screens/StockScreen/Input')

    fireEvent.changeText(input, testChangeText)

    expect(onChangeSpy).toBeCalledTimes(1)
    expect(onChangeSpy).toBeCalledWith(testChangeText)
  })
})
