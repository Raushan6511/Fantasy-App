import React, {useCallback, useRef, useState} from 'react';
import {View, Text, Dimensions, ViewStyle, StyleProp} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {styles} from './afSwipeButton-styles';
import AFAppIcons from '../app-icon/AFAppIcons';
import {APP_ICON_TYPES} from '../../common/constants';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

type SwipeButtonProps = {
  onSwipeSuccess: () => void;
  title?: string;
  swipeThreshold?: number;
  customStyle?: StyleProp<ViewStyle>;
};

const AFSwipeButton: React.FC<SwipeButtonProps> = ({
  onSwipeSuccess,
  title = 'Swipe to Confirm',
  swipeThreshold = 0.7,
  customStyle,
}) => {
  const translateX = useSharedValue(0);
  const buttonWidth = useSharedValue(60);
  const [isSwipeCompleted, setIsSwipeCompleted] = useState(false);

  const onSwipeCompleted = useCallback(() => {
    onSwipeSuccess();
    setIsSwipeCompleted(true);
    translateX.value = withSpring(0);
  }, [onSwipeSuccess, translateX]);

  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      'worklet';
      translateX.value = Math.min(
        Math.max(event.translationX, 0),
        SCREEN_WIDTH - buttonWidth.value,
      );
    })
    .onEnd(() => {
      'worklet';
      const threshold = SCREEN_WIDTH * swipeThreshold;

      if (translateX.value > threshold) {
        runOnJS(onSwipeCompleted)();
      } else {
        translateX.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  return (
    <View style={[styles.container, customStyle]}>
      <Text style={styles.instructionText}>
        {isSwipeCompleted ? 'Success' : title}
      </Text>
      {!isSwipeCompleted && (
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.swipeButton, animatedStyle]}>
            <AFAppIcons
              name={'angles-right'}
              type={APP_ICON_TYPES.FONT_AWESOME6}
            />
          </Animated.View>
        </GestureDetector>
      )}
    </View>
  );
};

export default AFSwipeButton;
