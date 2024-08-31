import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {colors} from '../../theme';

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
  tabContainer: ViewStyle;
  iconContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  heading: {
    color: 'black',
    fontSize: 14,
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.palette.black,
  },
  iconContainer: {
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
  },
});

export {styles};
