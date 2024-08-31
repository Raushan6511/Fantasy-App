import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {colors} from '../../theme';

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
  userItem: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  heading: {
    color: colors.palette.white,
    fontSize: 30,
    marginVertical: 20,
    textAlign: 'center',
  },
  userItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 16,
  },
});

export {styles};
