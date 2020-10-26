import React from 'react';
import 'react-native-gesture-handler';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Dashboard, AddNotes, ViewNotes} from '../containers';

/**
 * Stack Navigator
 */

const AppNavigator = createStackNavigator(
  {
    DashboardScreen: {
      screen: Dashboard,
    },
    AddNotesScreen: {
      screen: AddNotes,
    },
    ViewNotesScreen: {
      screen: ViewNotes,
    },
  },
  {
    initialRouteName: 'DashboardScreen',
    headerMode: 'screen',
  },
);

export default createAppContainer(AppNavigator);
