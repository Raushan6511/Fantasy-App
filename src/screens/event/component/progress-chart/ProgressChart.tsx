import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {colors} from '../../../../theme';

import {styles} from './progressChart-styles';
interface ProgressChartsProps {
  yesPercentage: number;
}

const ProgressCharts: React.FC<ProgressChartsProps> = ({yesPercentage}) => {
  const noPercentage = 100 - yesPercentage;
  return (
    <View style={styles.container}>
      <View>
        <AnimatedCircularProgress
          size={180}
          width={15}
          fill={100}
          tintColor={colors.secondary}
        />
        <AnimatedCircularProgress
          size={180}
          width={15}
          fill={yesPercentage}
          tintColor={colors.primary}
          style={StyleSheet.absoluteFill}>
          {() => (
            <View style={styles.percentageContainer}>
              <Text style={styles.percentage}>Win Probability</Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>

      <View style={styles.labelContainer}>
        <View style={styles.labelRow}>
          <View style={[styles.dot, {backgroundColor: colors.primary}]} />
          <Text style={styles.label}>Yes {yesPercentage}%</Text>
        </View>
        <View style={styles.labelRow}>
          <View style={[styles.dot, {backgroundColor: colors.secondary}]} />
          <Text style={styles.label}>No {noPercentage}%</Text>
        </View>
      </View>
    </View>
  );
};

export default ProgressCharts;
