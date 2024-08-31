import {StyleSheet} from 'react-native';

import {colors} from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  box: {
    height: 20,
    marginRight: 8,
    width: 20,
  },
  label: {
    marginRight: 4,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.palette.white,
  },
  percentage: {
    color: 'gray',
    fontSize: 16,
    marginLeft: 20,
  },
});

export {styles};
