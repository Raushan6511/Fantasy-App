import {StyleSheet} from 'react-native';

import {colors} from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  percentageContainer: {
    padding: 20,
  },
  percentage: {
    color: colors.palette.white,
    fontSize: 18,
    textAlign: 'center',
  },
  labelContainer: {
    paddingLeft: 20,
    justifyContent: 'center',
  },
  labelRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    color: colors.palette.white,
    fontSize: 18,
  },
  dot: {
    height: 20,
    marginRight: 10,
    width: 20,
  },
});

export {styles};
