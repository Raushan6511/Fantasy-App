import React from 'react';
import {View, Text, Image, FlatList, ImageSourcePropType} from 'react-native';
import {SvgProps} from 'react-native-svg';

import AFEventCard from '../event-card/AFEventCard';

import {CAROUSEL_PRESET} from '../../common/constants';
import {
  bannerData,
  carouselData,
  teamsEventsData,
} from '../../screens/home/constants';

import {styles} from './afCarousel-styles';

interface CarouselItem {
  id: number;
  title: string;
  subTitle: string;
  imageUrl: React.FC<SvgProps>;
  profit?: string;
}

interface EventItem {
  id: number;
  firstTeamName: string;
  secondTeamName: string;
  firstTeamWonMatches: number;
  secondTeamWonMatches: number;
  numberOfDraw: number;
}

interface BannerItem {
  id: number;
  source: ImageSourcePropType;
}

interface SBCarouselProps {
  type?: CAROUSEL_PRESET;
}

const AFCarousel: React.FC<SBCarouselProps> = props => {
  const {type = CAROUSEL_PRESET.DEFAULT} = props;

  const getData = () => {
    let RenderCarousel;

    switch (type) {
      case CAROUSEL_PRESET.HORIZONTAL:
        {
          const renderItem = ({item}: {item: CarouselItem}) => (
            <View style={styles.itemContainer} key={item.id}>
              <View style={{marginRight: 30}}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.subTitle}>{item.subTitle}</Text>
                  {item.profit && (
                    <Text style={styles.profit}>{item.profit}</Text>
                  )}
                </View>
              </View>
              {item.imageUrl && <item.imageUrl width={80} height={80} />}
            </View>
          );

          RenderCarousel = (
            <FlatList
              data={carouselData}
              horizontal
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.carouselContainer}
            />
          );
        }

        break;
      case CAROUSEL_PRESET.BANNER:
        {
          const renderItem = ({item}: {item: BannerItem}) => (
            <Image
              source={item.source}
              key={item.id}
              style={{
                height: 120,
                width: 400,
                resizeMode: 'stretch',
                marginRight: 10,
              }}
            />
          );

          RenderCarousel = (
            <FlatList
              data={bannerData}
              horizontal
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              style={styles.bannerContainer}
            />
          );
        }
        break;
      case CAROUSEL_PRESET.DEFAULT:
        {
          const renderItem = ({item}: {item: EventItem}) => (
            <AFEventCard
              id={item.id}
              firstTeamName={item.firstTeamName}
              secondTeamName={item.secondTeamName}
              firstTeamWonMatches={item.firstTeamWonMatches}
              secondTeamWonMatches={item.secondTeamWonMatches}
              numberOfDraw={item.numberOfDraw}
            />
          );

          RenderCarousel = (
            <FlatList
              data={teamsEventsData}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              style={styles.defaultContentContainer}
            />
          );
        }
        break;
      default:
        RenderCarousel = null;
    }
    return RenderCarousel;
  };

  return getData();
};

export default AFCarousel;
