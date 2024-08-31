import React from 'react';
import {FlatList} from 'react-native';

import AFCarousel from '../../components/carousel/AFCarousel';
import AFAppHeader from '../../components/app-header/AFAppHeader';

import {APP_HEADER_PRESET, CAROUSEL_PRESET} from '../../common/constants';

import {styles} from './home-styles';

const Home: React.FC = () => {
  const renderItem = ({item}: {item: CAROUSEL_PRESET}) => {
    return <AFCarousel type={item} />;
  };

  return (
    <FlatList
      ListHeaderComponent={
        <AFAppHeader preset={APP_HEADER_PRESET.HOME_HEADER} />
      }
      data={[
        CAROUSEL_PRESET.HORIZONTAL,
        CAROUSEL_PRESET.BANNER,
        CAROUSEL_PRESET.DEFAULT,
      ]}
      renderItem={renderItem}
      keyExtractor={item => item.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      stickyHeaderIndices={[0]}
    />
  );
};

export default Home;
