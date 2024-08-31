import {StyleSheet} from 'react-native';

import {colors} from '../../theme';

const styles = StyleSheet.create({
  dropdownButton: {
    padding: 15,
    backgroundColor: colors.palette.black,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
    maxHeight: 300,
  },
  itemContainer: {
    padding: 15,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export {styles};
