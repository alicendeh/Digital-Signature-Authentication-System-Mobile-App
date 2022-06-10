import { Dimensions } from 'react-native';

const colors = {
  white: '#ffffff',
  black: '#000000',
  primary: '#0033AD',
  secondary: '#FECB45',
  grey: '#C4C4C4',
  textPrimary: '#cccccc',
  textSecondary: '#AAAAAA',
  secondaryLightGrey: '#F9F9F9',
  lines: '#EEEEEE',
  secondaryLight: '#FFFAEE',
  lightGreen: '#F4FCFA',
  textGrey: '#909193',
  labelColor: '#A2A1A4',
  bottomOutline: '#e5e5e5',
  LIGHT_GREY: '#A8A8A8',
};

const sizes = {
  h1: 48,
  h2: 34,
  h3: 28,
  h4: 15,
  paragraph: 15,
  caption: 13,
  captionMedium: 12,
  base: 16,
  font: 14,
  border: 15,
  padding: 25,
  small: 12,
};

const fonts = {
  extraLarge: {
    fontSize: 36,
  },
  mdLarge: {
    fontSize: 24,
  },

  large: {
    fontSize: 18,
  },
  medium: {
    fontSize: 17,
  },
  small: {
    fontSize: 16,
  },
  extraSmall: {
    fontSize: 14,
  },
  extraLight: {
    fontWeight: '100',
  },
  light: {
    fontWeight: '300',
  },
  regular: {
    fontWeight: '500',
  },
  bold: {
    fontWeight: '700',
  },
  extraBold: {
    fontWeight: '900',
  },
};

const { width, height } = Dimensions.get('window');
export { colors, fonts, sizes, width as WIDTH, height as HEIGHT };
