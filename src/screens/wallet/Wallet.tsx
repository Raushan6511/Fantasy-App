import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './wallet-styles';

const Wallet: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Wallet Screen</Text>
    </View>
  );
};

export default Wallet;
