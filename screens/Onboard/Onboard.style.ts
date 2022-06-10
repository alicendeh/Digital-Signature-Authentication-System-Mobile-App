import { StyleSheet, Dimensions } from 'react-native';
import * as THEME from '../../constants/theme';

const WIDTH = Dimensions.get('screen').width;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    paddingVertical: 22,
  },
  skip: {
    alignItems: 'flex-end',
    height: 17,
    paddingHorizontal: 14,
  },
  main: {
    width: WIDTH * 1,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  skipColor: {
    color: 'brown',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 51,
    fontWeight: 'bold',
  },
  body: {
    textAlign: 'center',
    marginTop: 30,
    color: THEME.colors.LIGHT_GREY,
  },
  annimView: {
    height: '55%',
    width: WIDTH * 1,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  iconView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: THEME.colors.primary,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  rightIcon: {
    backgroundColor: THEME.colors.primary,
    elevation: 12,
    shadowColor: '#493997',
  },
  indicatorView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    height: 4,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  isLast: {
    display: 'flex',
  },
  diff: {
    display: 'none',
  },
  subtitle: {
    color: '#000',
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;
