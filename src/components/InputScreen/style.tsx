import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    flexDirection: 'column',
  },
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: 32,
    lineHeight: 32,
    marginTop: 28,
  },
  containerInput: {
    flex: 2,
    alignItems: 'center',
  },
  inputTitle: {
    lineHeight: 32,
    marginTop: 28,
    marginBottom: 28,
    fontSize: 18,
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: COLORS.secondary,
  },
  text: {
    color: COLORS.error,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});
