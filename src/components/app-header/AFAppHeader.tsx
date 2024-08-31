import React, {useState} from 'react';
import {View, Text, Switch, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AFDropDown from '../drop-down/AFDropDown';
import AFAppIcons from '../app-icon/AFAppIcons';

import {APP_HEADER_PRESET, APP_ICON_TYPES} from '../../common/constants';
import {colors} from '../../theme';

import {styles} from './afAppHeader-styles';

interface AFAppHeaderProps {
  preset: APP_HEADER_PRESET;
  screenName?: string;
}

const AFAppHeader: React.FC<AFAppHeaderProps> = ({preset, screenName}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();

  const dropdownData = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
  ];

  const handleSelect = (item: {label: string; value: string | number}) => {
    console.log('Selected:', item);
  };

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  const SwitchWithLabel: React.FC = () => (
    <View style={styles.switchContainer}>
      <Switch
        trackColor={{false: '#767577', true: colors.palette.lightGreen}}
        thumbColor={isEnabled ? colors.secondary : colors.palette.white}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text
        style={[
          {color: isEnabled ? colors.secondary : colors.palette.white},
          {marginLeft: 10},
        ]}>
        LIVE
      </Text>
    </View>
  );

  const renderHeaderContent = () => {
    switch (preset) {
      case APP_HEADER_PRESET.HOME_HEADER:
        return (
          <>
            <AFDropDown
              data={dropdownData}
              onSelect={handleSelect}
              placeholder="Category"
            />
            <View style={styles.rightContainer}>
              <SwitchWithLabel />
              <AFAppIcons
                name="bell-o"
                type={APP_ICON_TYPES.FONT_AWESOME}
                color={colors.palette.white}
                size={25}
              />
            </View>
          </>
        );
      case APP_HEADER_PRESET.SCREEN_HEADER:
        return (
          <View style={styles.screenHeaderContainer}>
            <AFAppIcons
              name="keyboard-backspace"
              type={APP_ICON_TYPES.MATERIAL_ICONS}
              color={colors.palette.white}
              size={40}
              iconPress={() => navigation.goBack()}
            />
            <Text style={styles.screenHeaderText}>{screenName}</Text>
            <TouchableOpacity onPress={() => {}}>
              <AFAppIcons
                name="sharealt"
                type={APP_ICON_TYPES.ANT_DESIGN}
                color={colors.palette.white}
                size={24}
              />
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderHeaderContent()}</View>;
};

export default AFAppHeader;
