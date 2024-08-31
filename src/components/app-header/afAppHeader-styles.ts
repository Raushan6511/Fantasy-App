import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {colors} from '../../theme';

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
  rightContainer: ViewStyle;
  switchContainer: ViewStyle;
  screenHeaderContainer: ViewStyle;
  screenHeaderText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    backgroundColor: colors.palette.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    padding: 10,
  },
  heading: {
    color: 'black',
    fontSize: 30,
  },
  rightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  switchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
  },
  screenHeaderContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  screenHeaderText: {
    color: colors.palette.white,
    fontSize: 20,
    flex: 1,
    marginLeft: 15,
    textAlign: 'left',
  },
});

export {styles};
