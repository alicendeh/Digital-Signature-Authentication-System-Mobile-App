import { StyleSheet } from 'react-native';
import * as THEME from './theme';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCenterColumn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCenterRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
  },
  horizontalSpaced: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: THEME.colors.lines,
  },
});

export default style;
