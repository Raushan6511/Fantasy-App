import {StyleSheet} from 'react-native';

import {colors} from '../../theme';

const styles = StyleSheet.create({
  carouselContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  bannerContainer: {
    marginHorizontal: 15,
  },
  itemContainer: {
    backgroundColor: colors.palette.eerieBlack,
    borderRadius: 10,
    flexDirection: 'row',
    margin: 10,
    padding: 20,
    height: 110,
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: colors.palette.white,
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    marginRight: 20,
  },
  profit: {
    fontSize: 14,
    color: colors.secondary,
  },
  defaultContentContainer: {
    paddingHorizontal: 20,
  },
});

export {styles};
