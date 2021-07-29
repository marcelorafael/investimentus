import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { Modal } from './Modal'

storiesOf('Base/Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <View style={{flex: 1, alignItems:'center', justifyContent:'center' }}>
      <Modal
        onClose={action('onClose')}
        title="Name Title"
      >
        <Text style={{color: '#FFF'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.{`\n`} 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,{`\n`} 
          when an unknown printer took a galley of type and scrambled it to make a type{`\n`}
          specimen book.
        </Text>
      </Modal>
    </View>
  ))
