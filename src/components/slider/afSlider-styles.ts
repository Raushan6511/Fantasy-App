import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  slider: ViewStyle;
}

export const THUMB_SIZE = 26;

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
});

export default styles;
