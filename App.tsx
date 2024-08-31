/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GestureHandlerRootView>
        <RootNavigator />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

export default App;
