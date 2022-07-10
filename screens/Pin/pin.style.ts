import { StyleSheet } from 'react-native';
import * as THEME from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.white,
  },

  pinBox: {
    width: 50,
    height: 50,
    borderRadius: 9,
    backgroundColor: 'rgba(0, 51, 173, 0.25)',
    // alignItems: 'center',
  },
  pinValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
  },

  main: {
    marginHorizontal: 23,
    flex: 1,
  },

  input: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  passcode: {
    marginTop: 34,
    marginBottom: 12,
  },

  txt: {
    marginTop: 32,
    fontStyle: 'italic',
    color: THEME.colors.primary,
    fontWeight: THEME.fonts.medium,
  },
});

export default styles;
