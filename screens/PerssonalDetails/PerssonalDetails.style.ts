import { StyleSheet } from 'react-native';
import * as THEME from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.white,
  },

  main: {
    marginHorizontal: 25,
  },
  header: {
    marginHorizontal: 25,
    marginTop: 33,
  },

  userIdentity: {
    marginTop: 47,
  },

  verified: {
    borderWidth: 2,
    borderColor: 'rgba(0, 166, 17, 1)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    marginTop: 45,
  },

  unverified: {
    borderWidth: 2,
    borderColor: THEME.colors.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    marginTop: 45,
  },

  settings: {
    marginTop: 18,
  },

  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 10,
    backgroundColor: THEME.colors.white,
    height: 55,
    paddingHorizontal: 19,
    marginTop: 12,
  },

  scroll: {
    flex: 1,
  },

  dropDown: {
    marginTop: 12,
  },

  lastItem: {
    marginBottom: 20,
  },

  containerModal: {
    width: 350,
    // height: 450,
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

  input: {
    marginTop: 12,
  },

  btn: {
    marginTop: 22,
  },
});

export default styles;
