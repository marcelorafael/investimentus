import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StockScreen } from './StockScreen'

storiesOf('Screens/StockScreen', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <StockScreen 
      onPress={action('onPress')}
      onChangeText={action('onChangeText')}
      placeholder={text('placeholder', 'exemplo: bidi4...')}
      value={text('value','')}
    >
      <></>
    </StockScreen>
  ))
