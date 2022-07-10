import { StyleSheet } from 'react-native';
import * as THEME from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 450,
    paddingHorizontal: 15,
    paddingVertical: 40,
    elevation: 4,
    marginVertical: '30%',
    // alignSelf: 'center',
    borderColor: '#000',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    backgroundColor: THEME.colors.white,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  iconBox: {
    height: 90,
    width: 90,
    backgroundColor: '#F5F1F9',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBox: {
    height: '45%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomBox: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 100,
    marginVertical: 12,
  },
  errorIconBox: {
    backgroundColor: '#FDC5D4',
    padding: 8,
    borderRadius: 45,
  },
  btnBox: {
    alignSelf: 'center',
  },
  coinsPopup: {
    flex: 0.8,
    width: '100%',
    borderRadius: 20,
    backgroundColor: THEME.colors.white,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  coinItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: THEME.colors.LIGHT_GREY,
    borderBottomWidth: 0.5,
    paddingVertical: 12,
  },
});

export default styles;
