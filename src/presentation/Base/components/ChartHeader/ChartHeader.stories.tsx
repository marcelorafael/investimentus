import { object, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { ChartHeader } from './ChartHeader'

storiesOf('Screens/ChartHeader', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ChartHeader
      labels={object('labels', ['Dolar', 'Real', 'Bitcoin', 'Euro'])}
      datasets={object('datasets', [
        {
          data: [20, 45, 28, 80]
        }
      ])}
    />
  ))
