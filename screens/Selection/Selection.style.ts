import { StyleSheet, Dimensions } from 'react-native';
import * as THEME from '../../constants/theme';

const WIDTH = Dimensions.get('screen').width;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 22,
  },
  heading: {
    marginBottom: 7,
    marginTop: 21,
  },
  main: {
    marginHorizontal: 25,
    paddingVertical: 22,
    flex: 1,
  },

  card: {
    backgroundColor: THEME.colors.white,
    shadowColor: THEME.colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    height: 120,
    width: THEME.WIDTH / 2 - 32,
    borderRadius: 10,
  },

  cardContainer: {
    marginTop: 44,
  },

  txt: {
    marginTop: 12,
  },

  btn: {
    marginHorizontal: 25,
  },
});

export default style;
