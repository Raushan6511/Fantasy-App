import React from 'react';
import {Text, Pressable, StyleProp, ViewStyle} from 'react-native';

import {colors} from '../../theme';
import {BUTTON_PRESET} from '../../common/constants';

import {styles} from './afButton-styles';

interface IAFButtonType {
  title: string;
  customButtonStyle?: StyleProp<ViewStyle>;
  buttonHandler: () => void;
  titleColor?: string;
  buttonType?: string;
  isDisabled?: boolean;
}

const AFButton: React.FC<IAFButtonType> = props => {
  const {
    title,
    customButtonStyle,
    buttonHandler,
    titleColor = colors.palette.white,
    buttonType = BUTTON_PRESET.PRIMARY,
    isDisabled = false,
  } = props;

  const getButtonStyle = () => {
    let buttonStyle = {};
    switch (buttonType) {
      case BUTTON_PRESET.PRIMARY:
        buttonStyle = [
          styles.button,
          styles.primaryButton,
          customButtonStyle,
          isDisabled && styles.disable,
        ];
        break;
      case BUTTON_PRESET.SECONDARY:
        buttonStyle = [
          styles.button,
          styles.secondaryButton,
          customButtonStyle,
          isDisabled && styles.disable,
        ];
        break;
      case BUTTON_PRESET.CUSTOM:
        buttonStyle = [
          styles.button,
          customButtonStyle,
          isDisabled && styles.disable,
        ];
        break;
      default:
        buttonStyle = {};
    }
    return buttonStyle;
  };

  return (
    <Pressable
      onPress={isDisabled ? () => {} : buttonHandler}
      style={getButtonStyle}>
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
    </Pressable>
  );
};

export default AFButton;
