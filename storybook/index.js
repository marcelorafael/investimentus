import React from 'react';
// if you use expo remove this line
import { AppRegistry } from 'react-native';

import { 
  getStorybookUI, 
  configure, 
  addDecorator 
} from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components'
import { theme } from '../constants';

import './rn-addons';
import { loadStories } from './storyLoader'

// enables knobs for all stories
addDecorator(withKnobs);

// add theme in all stories
addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))

// import stories
configure(() => {
  loadStories()
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;

// const StorybookUIRoot = getStorybookUI({ port: 7007, host: 'localhost' })

// export default StorybookUIRoot
