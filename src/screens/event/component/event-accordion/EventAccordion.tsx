import React from 'react';
import {View, Text} from 'react-native';

import AFAppIcons from '../../../../components/app-icon/AFAppIcons';

import {APP_ICON_TYPES} from '../../../../common/constants';
import {colors} from '../../../../theme';

import {styles} from './eventAccordion-styles';

interface IEventAccordion {
  title: string;
  subTitle: string;
}

const EventAccordion: React.FC<IEventAccordion> = props => {
  const {title, subTitle} = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.subHeading}>{subTitle}</Text>
      </View>
      <AFAppIcons
        name={'right'}
        type={APP_ICON_TYPES.ANT_DESIGN}
        color={colors.palette.white}
        size={20}
      />
    </View>
  );
};

export default EventAccordion;
