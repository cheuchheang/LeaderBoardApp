import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  text: {
    fontSize: 12,
    color: COLORS.white,
    textAlign: 'center',
  },
  header: {
    color: COLORS.white,
    textAlign: 'center',
  },
});

export {styles};
