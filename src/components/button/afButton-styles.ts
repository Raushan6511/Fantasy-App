import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {colors} from '../../theme';

interface Styles {
  button: ViewStyle;
  title: TextStyle;
  primaryButton: ViewStyle;
  secondaryButton: ViewStyle;
  disable: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    alignItems: 'center',
    backgroundColor: colors.palette.black,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
  },
  primaryButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.secondary,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  disable: {
    backgroundColor: colors.palette.gray,
  },
});

export {styles};
