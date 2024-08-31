import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {colors} from '../../theme';

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  heading: {
    color: colors.palette.white,
    fontSize: 30,
    textAlign: 'center',
  },
});

export {styles};
