import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {colors} from '../../../../theme';

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
  subHeading: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderColor: colors.palette.white,
    borderStyle: 'dashed',
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    padding: 20,
  },
  heading: {
    color: colors.palette.white,
    fontSize: 18,
    fontWeight: '600',
  },
  subHeading: {
    color: colors.palette.white,
    fontSize: 14,
  },
});

export {styles};
