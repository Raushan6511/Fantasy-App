import React, {memo} from 'react';
import {View} from 'react-native';
import {Slider} from '@react-native-assets/slider';

import AFAppIcons from '../app-icon/AFAppIcons';

import {APP_ICON_TYPES} from '../../common/constants';
import {colors} from '../../theme';

import styles from './afSlider-styles';

interface IAFSliderProps {
  /** maxRange: is a required prop that takes the maximum value of the slider */
  maxRange: number;
  /**  minRange is a required prop that takes the minimum value of the slider */
  minRange: number;
  /** onValueChange: is a required prop that handles the slider upon value change */
  onValueChange: (value: number) => void;
  /** steps: is a required prop that is used in CT_EVENTS as slider source */
  steps: number;
  /** value: is a required prop that give the value of the slider */
  value: number;
  /** tintColor is color that applied to the  thumb and track */
  tintColor?: string;
}

const AFSlider: React.FC<IAFSliderProps> = React.memo(props => {
  const {maxRange, minRange, onValueChange, value, steps, tintColor} = props;

  return (
    <View style={[styles.container]}>
      <AFAppIcons
        name={'circle-minus'}
        type={APP_ICON_TYPES.FONT_AWESOME6}
        color={colors.palette.white}
        size={40}
      />
      <Slider
        minimumValue={minRange}
        maximumValue={maxRange}
        minimumTrackTintColor={tintColor}
        thumbTintColor={tintColor}
        maximumTrackTintColor={colors.palette.white}
        trackHeight={10}
        thumbSize={25}
        value={value}
        onValueChange={onValueChange}
        step={steps}
        style={styles.slider}
      />
      <AFAppIcons
        name={'circle-plus'}
        type={APP_ICON_TYPES.FONT_AWESOME6}
        color={colors.palette.white}
        size={40}
      />
    </View>
  );
});

export default memo(AFSlider);
