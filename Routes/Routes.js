import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "../navigation/tabs";
import { InfoCurrencyPresenter } from '../src/presentation/Screens/container/InfoCurrencyPresenter/InfoCurrencyPresenter';
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#218c74' },
        }}
        initialRouteName={'Tabs'}
        headerMode="screen"
      >
        <Stack.Screen
          name="Tabs"
          component={Tabs}
        />

        <Stack.Screen
          name="InfoCurrencyPresenter"
          component={InfoCurrencyPresenter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;