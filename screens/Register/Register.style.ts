import { StyleSheet } from 'react-native';
import * as THEME from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.white,
  },

  main: {
    marginTop: 20,
    marginHorizontal: 25,
  },

  logoContainer: {
    marginTop: 24,
  },

  introContainer: {
    marginTop: 40,
  },

  countrySelectorContainer: {
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
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },

  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  phoneNumber: {
    flex: 1,
    marginLeft: 8,
  },

  signupButton: {
    marginTop: 32,
  },

  alreadyHaveAcct: {
    marginTop: 27,
    flexDirection: 'row',
  },
  txt: {
    marginLeft: 4,
  },
  input: {
    marginTop: 14,
  },
  forgetPwd: {
    marginTop: 14,
    marginBottom: 22,
    flexDirection: 'row',
  },
  containerSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  email: {
    marginLeft: 3,
  },

  inputContainer: {
    marginTop: 40,
  },
});

export default styles;
