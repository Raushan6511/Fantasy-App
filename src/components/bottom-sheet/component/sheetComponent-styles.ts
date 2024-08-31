import {StyleSheet} from 'react-native';

import {colors} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: colors.palette.eerieBlack,
    borderColor: colors.palette.gray,
    borderRadius: 50,
    flexDirection: 'row',
    marginBottom: 20,
    overflow: 'hidden',
  },
  middleContainer: {
    borderColor: colors.palette.gray,
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 20,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  heading: {
    color: colors.palette.white,
    flexShrink: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  imageWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  priceLabel: {
    color: colors.palette.white,
    fontSize: 18,
    fontWeight: '600',
  },
  priceValue: {
    color: colors.palette.white,
    fontSize: 18,
    fontWeight: '600',
  },
  quantityLabel: {
    color: colors.palette.white,
    fontSize: 14,
    marginVertical: 5,
    textAlign: 'right',
  },
  dashedContainer: {
    borderColor: colors.palette.gray,
    borderStyle: 'dashed',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingTop: 20,
  },
  icon: {
    backgroundColor: colors.palette.white,
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resultLabel: {
    color: colors.palette.white,
    fontSize: 14,
  },
  balanceLabel: {
    color: colors.palette.white,
    marginVertical: 20,
    textAlign: 'center',
  },
  choiceButton: {
    borderRadius: 50,
    borderWidth: 0,
    flex: 1,
    marginHorizontal: 5,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export {styles};
