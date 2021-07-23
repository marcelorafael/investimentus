import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';
import Button from './Button'

storiesOf('Base/Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button />
  ))
