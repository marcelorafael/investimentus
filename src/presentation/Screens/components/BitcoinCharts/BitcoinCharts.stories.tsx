import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';
import { BitcoinCharts } from './BitcoinCharts'

storiesOf('Screens/BitcoinCharts', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <BitcoinCharts title={text('title','Crypto Moedas')}>
      <View>
        <Text style={{backgroundColor:"#fff", borderRadius: 5}}>fbgnhmj,hmgfdsasdfgh</Text>
        <Text style={{backgroundColor:"#fff", borderRadius: 5}}>fbgnhmj,hmgfdsasdfgh</Text>
        <Text style={{backgroundColor:"#fff", borderRadius: 5}}>fbgnhmj,hmgfdsasdfgh</Text>
        <Text style={{backgroundColor:"#fff", borderRadius: 5}}>fbgnhmj,hmgfdsasdfgh</Text>
      </View>
    </BitcoinCharts>
  ))
