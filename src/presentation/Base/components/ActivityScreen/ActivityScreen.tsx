import React, {useEffect} from 'react'
import { Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Title } from './ActivityScreen.styles';

export type NameProps = 'bitcoin' | 'usd' | 'euro'

interface ActivityScreenProps {
  title?: string
  name: NameProps
  size: number
}

const ActivityScreen: React.FC<ActivityScreenProps> = (
  props: ActivityScreenProps
) => {
  const { title, name, size } = props;

  let rotateValueHolder = new Animated.Value(0);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    startImageRotateFunction();
  },[])
  return (
    <Container>
      <Title>{title}</Title>
      <Animated.View
        style={{
          marginTop: 10,
          transform: [{rotate: rotateData}],
        }}
      >
        <Icon name={name} color="#FFF" size={size} />
      </Animated.View>
    </Container>
  )
}
const ActivityScreenMemo = React.memo(ActivityScreen);
export { ActivityScreenMemo as ActivityScreen };