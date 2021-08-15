import { renderWithProviders } from '@/presentation/tests/utils'
import React from 'react'

import { InfoCurrencie } from './InfoCurrencie'
import 'setimmediate'

describe('Screens/InfoCurrencie', () => {
  it('should match snapshot', () => {
    const sut = <InfoCurrencie title="" buy="" sell="" variation="" />

    const renderComponent = renderWithProviders(sut)

    expect(renderComponent).toMatchSnapshot()
  })
})
