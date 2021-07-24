import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ChartHeader } from './ChartHeader'

storiesOf('Screens/ChartHeader', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ChartHeader />
  ))