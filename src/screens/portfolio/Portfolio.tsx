import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './portfolio-styles';

const Portfolio: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Portfolio Screen</Text>
    </View>
  );
};

export default Portfolio;
