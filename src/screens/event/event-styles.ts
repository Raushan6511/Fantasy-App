import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {colors} from '../../theme';

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
  subHeading: TextStyle;
  image: ImageStyle;
  buttonContainer: ViewStyle;
  primaryButton: ViewStyle;
  secondaryButton: ViewStyle;
  keepTrading: TextStyle;
  marketLabel: TextStyle;
  sublevel: TextStyle;
  predictionContainer: ViewStyle;
  checkboxContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  heading: {
    color: colors.palette.white,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  subHeading: {
    color: colors.palette.lightGreen,
    fontSize: 16,
    marginTop: 30,
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
  },
  buttonContainer: {
    borderColor: colors.palette.gray,
    borderTopWidth: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 40,
  },
  primaryButton: {
    flex: 1,
    marginRight: 10,
  },
  secondaryButton: {
    flex: 1,
    marginLeft: 10,
  },
  keepTrading: {
    color: colors.palette.gray,
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  marketLabel: {
    color: colors.palette.white,
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingVertical: 30,
    textAlign: 'center',
  },
  sublevel: {
    color: colors.palette.white,
    fontSize: 14,
  },
  predictionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  checkboxContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export {styles};
