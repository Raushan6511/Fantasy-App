import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './bottom-tab-navigator/BottomTabNavigator';

import {STACK_ROUTES} from '../common/constants';

import Event from '../screens/event/Event';

const RootNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={STACK_ROUTES.BOTTOM_HOME}
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={STACK_ROUTES.EVENT}
          component={Event}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
