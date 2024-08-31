import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AFAppIcons from '../../components/app-icon/AFAppIcons';

import {colors} from '../../theme';
import {BottomTabScreens} from './constants';

import {styles} from './bottomTabNavigation-styles';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const TabButton = (props: any) => {
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;

    const {icon, label, type} = item;

    const tabStyle = focused
      ? {borderColor: colors.palette.white, borderWidth: 2}
      : {borderColor: colors.palette.gray, borderWidth: 1};

    const tabLabelStyle = {color: colors.palette.white};

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={[styles.tabContainer]}>
        <View style={[styles.iconContainer, tabStyle]}>
          <AFAppIcons
            name={icon}
            type={type}
            size={23}
            color={colors.palette.white}
            iconPress={onPress}
          />
        </View>
        <Text style={tabLabelStyle}>{label}</Text>
      </TouchableOpacity>
    );
  };

  /**
   * will iterate screens array
   * @returns all the navigation screens
   */
  const renderScreens = () => {
    return BottomTabScreens.map((item, index) => {
      return (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarStyle: {
              height: 85,
              borderColor: colors.palette.black,
              backgroundColor: colors.background,
            },
            headerShown: false,
            tabBarButton: props => <TabButton {...props} item={item} />,
          }}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator>{renderScreens()}</Tab.Navigator>
    </View>
  );
};

export default BottomTabNavigator;
