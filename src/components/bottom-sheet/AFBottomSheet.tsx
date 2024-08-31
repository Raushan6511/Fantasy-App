import React, {
  forwardRef,
  useImperativeHandle,
  useCallback,
  ReactNode,
  useState,
  isValidElement,
} from 'react';
import {Dimensions, View, TouchableWithoutFeedback, Modal} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {PassingData} from '../../common/types';

import {styles} from './afBottomSheet-styles';
import {SCREEN} from '../../common/constants';

type Props = {
  snapTo: string;
  children?: ReactNode;
  backgroundColor: string;
  backDropColor?: string;
};

export interface BottomSheetMethods {
  expand: () => void;
  close: () => void;
  bottomSheetName: (value: PassingData) => void;
}

const AFBottomSheet = forwardRef<BottomSheetMethods, Props>(
  (
    {
      snapTo,
      children,
      backgroundColor,
      backDropColor = 'rgba(43, 50, 62,0.7)',
    }: Props,
    ref,
  ) => {
    const inset = useSafeAreaInsets();
    // const {height} = Dimensions.get('screen');
    const percentage = parseFloat(snapTo.replace('%', '')) / 100;
    const closeHeight = SCREEN.SCREEN_HEIGHT;
    const openHeight = SCREEN.SCREEN_HEIGHT - SCREEN.SCREEN_HEIGHT * percentage;
    const topAnimation = useSharedValue(closeHeight);

    const [isVisible, setIsVisible] = useState(false);
    const [eventCardData, setEventCardData] = useState({});

    const bottomSheetName = (value: PassingData) => {
      setEventCardData(value);
    };

    const expand = useCallback(() => {
      'worklet';
      runOnJS(setIsVisible)(true);
      topAnimation.value = withTiming(openHeight);
    }, [openHeight, topAnimation]);

    const close = useCallback(() => {
      'worklet';
      topAnimation.value = withTiming(closeHeight, {}, finished => {
        if (finished) {
          runOnJS(setIsVisible)(false);
        }
      });
    }, [closeHeight, topAnimation]);

    useImperativeHandle(
      ref,
      () => ({
        expand,
        close,
        bottomSheetName,
      }),
      [expand, close],
    );

    const animationStyle = useAnimatedStyle(() => {
      'worklet';
      return {
        top: topAnimation.value,
      };
    });

    const renderChildren = () => {
      if (children) {
        // Use React.Children.map to clone each child and pass additional props
        return React.Children.map(children, child => {
          if (isValidElement(child)) {
            return React.cloneElement(child, {eventCardData});
          }
          return child;
        });
      }
      return null;
    };

    return (
      <Modal visible={isVisible} transparent={true} animationType="fade">
        <GestureHandlerRootView>
          <TouchableWithoutFeedback onPress={close}>
            <View style={[styles.overlay, {backgroundColor: backDropColor}]} />
          </TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.container,
              animationStyle,
              {
                backgroundColor: backgroundColor,
                paddingBottom: inset.bottom,
              },
            ]}>
            <TouchableWithoutFeedback>
              <View>
                <View style={styles.lineContainer}>
                  <View style={styles.line} />
                </View>
                {renderChildren()}
              </View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </GestureHandlerRootView>
      </Modal>
    );
  },
);

export default AFBottomSheet;
