import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  lineContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  line: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    height: 10,
    width: 40,
  },
});

export {styles};
