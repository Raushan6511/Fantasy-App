import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './checkBox-styles';

interface InfoBoxProps {
  boxColor: string;
  label: string;
  percentage?: number;
}

const CheckBox: React.FC<InfoBoxProps> = ({boxColor, label, percentage}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor: boxColor}]} />
      <Text style={styles.label}>{label}</Text>
      {percentage !== undefined && (
        <Text style={styles.percentage}>{`${percentage}%`}</Text>
      )}
    </View>
  );
};

export default CheckBox;
