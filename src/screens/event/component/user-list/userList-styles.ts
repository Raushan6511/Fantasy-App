import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors} from '../../../../theme';

// import { AppColors, Typography } from 'theme';
// import { getFontSize, heightPxToDP, widthPxToDP } from 'common/utilities';

// import { SCREEN_HEIGHT } from 'common/constants';

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
  label: TextStyle;
  subLabel: TextStyle;
  showMore: ViewStyle;
  bottomContainer: ViewStyle;
  amountContainer: ViewStyle;
  investAmount: TextStyle;
  receiveAmount: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  subContainer: {
    borderWidth: 1,
    // borderColor: 'red',
    marginVertical: 10,
  },
  label: {
    color: colors.palette.white,
    fontSize: 16,
  },
  subLabel: {
    color: colors.palette.white,
    fontSize: 12,
  },
  showMore: {
    backgroundColor: colors.palette.eerieBlack,
    marginVertical: 10,
    borderColor: colors.palette.gray,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountContainer: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 15,
  },
  investAmount: {
    flex: 3,
    backgroundColor: colors.primary,
    textAlign: 'center',
  },
  receiveAmount: {
    flex: 1,
    backgroundColor: colors.secondary,
    textAlign: 'center',
  },
});

export {styles};
