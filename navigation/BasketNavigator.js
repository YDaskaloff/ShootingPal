import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../constants/Colors';
import StartScreen from '../screens/StartScreen';
import PracticeScreen from '../screens/PracticeScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  cardStyle: {
      backgroundColor: 'white'
  }
};

const PracticeNavigator = createStackNavigator(
  {
    Start: StartScreen,
    Practice: PracticeScreen,
  },
  { defaultNavigationOptions: defaultNavOptions }
);

export default createAppContainer(PracticeNavigator);
