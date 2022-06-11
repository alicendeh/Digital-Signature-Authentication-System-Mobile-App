import { StyleSheet } from 'react-native';
import * as THEME from '../constants/theme';

const styles = StyleSheet.create({
  tabBarStyle: {
    width: THEME.WIDTH / 2,
    height: 45,
    borderRadius: 100,
    marginBottom: 20,
    alignSelf: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    borderWidth: 0,
    paddingBottom: 0,
    paddingStart: 2,
    // paddingHorizontal: 15,
  },
});

export default styles;
