import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import { StockScreenPresenter } from '../src/presentation/Screens/components/StockScreen/container/StockScreenPresenter';
// import { COLORS, FONTS, icons } from "../constants"

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="StockScreen"
                component={StockScreenPresenter}
            />
            <Tab.Screen
                name="Portfolio"
                component={StockScreenPresenter}
            />
            <Tab.Screen
                name="Transaction"
                component={StockScreenPresenter}
            />
            <Tab.Screen
                name="Prices"
                component={StockScreenPresenter}
            />
            <Tab.Screen
                name="Settings"
                component={StockScreenPresenter}
            />
        </Tab.Navigator>
    )
}

export default Tabs;