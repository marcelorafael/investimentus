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
import { CurrencieScreenPresenter } from '../src/presentation/Screens/container/CurrencieScreenPresenter';
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
                name="CurrencieScreenPresenter"
                component={CurrencieScreenPresenter}
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