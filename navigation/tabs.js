import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'

import { StockScreenPresenter } from '../src/presentation/Screens/container/StockScreenPresenter'
import { CurrencieScreenPresenter } from '../src/presentation/Screens/container/CurrencieScreenPresenter'
import { BitcoinChartsPresenter } from '../src/presentation/Screens/container/BitcoinChartsPresenter'

import { COLORS, FONTS } from '../constants'

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        top: -15,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
      }}
      onPress={onPress}
    >
      <LinearGradient
        colors={[COLORS.green, COLORS.secondary]}
        style={{
          width: 50,
          height: 50,
          borderRadius: 35
        }}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.black,
          borderTopColor: 'transparent',
          height: 55
        }
      }}
    >
      <Tab.Screen
        name="StockScreen"
        component={StockScreenPresenter}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Icon
                name="search"
                color={focused ? COLORS.greenFocused : COLORS.gray}
                size={20}
              />
              <Text
                style={{
                  color: focused ? COLORS.greenFocused : COLORS.gray,
                  ...FONTS.body5
                }}
              >
                A????es
              </Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="BitcoinChartsPresenter"
        component={BitcoinChartsPresenter}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bitcoin"
              color={focused ? COLORS.white : COLORS.black}
              size={20}
            />
          ),
          // eslint-disable-next-line react/display-name
          tabBarButton: (props) => <TabBarCustomButton {...props} />
        }}
      />

      <Tab.Screen
        name="CurrencieScreenPresenter"
        component={CurrencieScreenPresenter}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Icon
                name="bar-chart"
                color={focused ? COLORS.greenFocused : COLORS.gray}
                size={20}
              />
              <Text
                style={{
                  color: focused ? COLORS.greenFocused : COLORS.gray,
                  ...FONTS.body5
                }}
              >
                Cota????es
              </Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
})

export default Tabs
