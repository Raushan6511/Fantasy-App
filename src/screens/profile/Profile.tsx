import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './profile-styles';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile Screen</Text>
    </View>
  );
};

export default Profile;
