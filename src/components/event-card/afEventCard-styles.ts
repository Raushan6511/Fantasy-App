import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {colors} from '../../theme';

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
  subTitle: TextStyle;
  buttonContainer: ViewStyle;
  primaryButton: ViewStyle;
  secondaryButton: ViewStyle;
  iplImage: ImageStyle;
  upperContainer: ViewStyle;
  leftContainer: ViewStyle;
  imageWrapper: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.palette.eerieBlack,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  heading: {
    color: colors.palette.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'white',
    fontSize: 10,
    marginVertical: 15,
  },
  buttonContainer: {flexDirection: 'row'},
  primaryButton: {flex: 1, marginRight: 10},
  secondaryButton: {
    borderWidth: 0,
    flex: 1,
    marginLeft: 10,
  },
  imageWrapper: {
    overflow: 'hidden',
    borderRadius: 10,
  },
  iplImage: {
    backgroundColor: 'white',
  },
  upperContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  leftContainer: {
    flex: 1,
    marginRight: 20,
  },
});

export {styles};
