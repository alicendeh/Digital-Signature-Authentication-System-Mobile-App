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

  box: {
    marginTop: 28,
  },
  btnUpdate: {
    marginHorizontal: 25,
  },

  btn: {
    marginTop: 25,
  },

  signature: {
    shadowColor: '#000',
    backgroundColor: THEME.colors.white,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },

  copy: {
    shadowColor: '#000',
    backgroundColor: THEME.colors.white,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '23%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginLeft: 12,
  },
  copyBox: {
    marginTop: 33,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  containerModal: {
    width: 350,
    height: 450,
    paddingHorizontal: 15,
    paddingVertical: 40,
    elevation: 4,
    marginVertical: '30%',
    borderColor: '#000',
    borderRadius: 20,
    shadowColor: '#000',
    backgroundColor: THEME.colors.white,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  topBox: {
    // height: '45%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default style;
