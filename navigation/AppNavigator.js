import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";
import LogoutScreen from "../screens/LogoutScreen";
import LoginScreen from "../screens/LoginScreen";
import ComponentsScreen from "../screens/ComponentsScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import Colors from "../constants/Colors";

const AppStack = createBottomTabNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel:"Home",
      tabBarIcon: ({ focused }) => (
          <Ionicons color={focused ? Colors.main: Colors.gray} name="ios-home" size={20}/>
      )
    },
  },
  Components:{
    screen: ComponentsScreen,
    navigationOptions: {
      tabBarLabel:"Components",
      tabBarIcon: ({ focused }) => (
          <Ionicons color={focused ? Colors.main: Colors.gray} name="ios-list" size={20}/>
      )
    },
  },
  Logout: {
    screen: LogoutScreen,
    navigationOptions: {
      tabBarLabel:"Logout",
      tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-log-out" size={20}/>
      )
    },
  }
});
const AuthStack = createStackNavigator({ SignIn: LoginScreen });

export default createAppContainer(
    createSwitchNavigator(
        {
          AuthLoading: AuthScreen,
          App: AppStack,
          Auth: AuthStack,
        },
        {
          initialRouteName: 'AuthLoading',
        }
    )
);
