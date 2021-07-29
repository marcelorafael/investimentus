import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';
import { InfoCurrencie } from './InfoCurrencie'

storiesOf('Screens/InfoCurrencie', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <View style={{flex: 1, justifyContent:'flex-end'}}>
      <InfoCurrencie
        title={text('title','Dollar')} 
        buy={text('buy','255')}
        sell={text('sell','6.68')}
        variation={text('variation','-5.6')} 
      />
    </View>
  ))
