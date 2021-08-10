import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { View, Text } from 'react-native'
import { Card } from './Card'

storiesOf('Base/Card', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Card width={156} height={156} background="#F5F5F5">
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#FFF' }}>Teste</Text>
      </View>
    </Card>
  ))
