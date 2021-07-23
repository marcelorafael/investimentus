import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { OutlineInput } from './OutlineInput'

storiesOf('Screens/OutlineInput', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <OutlineInput />
  ))
