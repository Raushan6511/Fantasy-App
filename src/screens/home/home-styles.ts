import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {colors} from '../../theme';

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.background,
  },
  heading: {
    color: 'black',
    fontSize: 30,
  },
});

export {styles};
