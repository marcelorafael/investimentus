import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { ActivityScreen } from './ActivityScreen'

storiesOf('Base/ActivityScreen', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <View style={{flex: 1, backgroundColor:'#7F5DF0'}}>
      <ActivityScreen
        title={text('title','Bitcoin')}
        name="bitcoin"
        size={100}
      />
    </View>
  ))
