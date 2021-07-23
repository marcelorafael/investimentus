import React, { useRef, useState, useEffect } from 'react'
import { Animated } from 'react-native'
import { Container, Label } from './OutlineInput.styles';

const OutlineInput: React.FC = () => {
  return (
    <Container></Container>
  )
}
const OutlineInputMemo = React.memo(OutlineInput);
export { OutlineInputMemo as OutlineInput };