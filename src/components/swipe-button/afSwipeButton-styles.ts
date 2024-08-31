import {StyleSheet} from 'react-native';

import {colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    borderRadius: 50,
    justifyContent: 'center',
    padding: 5,
    minHeight: 60,
  },
  instructionText: {
    alignSelf: 'center',
    color: colors.palette.white,
    fontSize: 18,
    position: 'absolute',
  },
  swipeButton: {
    alignItems: 'center',
    backgroundColor: colors.palette.white,
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
  swipeText: {
    color: colors.primary,
    fontSize: 30,
  },
});

export {styles};
