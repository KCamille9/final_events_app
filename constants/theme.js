import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const CUSTOMFONT_REGULAR = 'ProductSans-Regular';
const CUSTOMFONT_BOLD = 'ProductSans-Bold';
const CUSTOMFONT_BLACK = 'ProductSans-Black';

export const COLORS = {
  default: '#FFFFFF',
  primary: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
  tabBar: '#121212',
  input: '#1D1D1D',
  blue: '#4096FE',
  gray: '#878787',
  gray1: '#666666',
  lightGray: '#dedede',
  byu_navy: '#002E5D',
  byu_royal: '#0062B8',
  byu_lightBlue: '#BDD6E6',
  byu_blueGray: '#6E7CA0',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  transparentBlack: 'rgba(0, 0, 0, 0.4)',
  linear: ['#439DFEE8', '#F687FFE8'],
};
export const SIZES = {
  // global sizes
  base: '8px',
  font: '14px',
  radius: 20,
  padding: '30px',
  small: '24px',
  big: '32px',

  // font sizes
  large: 40,
  small: 24,
  h1: 30,
  h2: 24,
  h3: 20,
  h4: 16,
  h5: 14,
  h6: 13,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 13,
  body6: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  large: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.large, lineHeight: 40 },
  small: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.small, lineHeight: 22 },
  h1: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h5, lineHeight: 22 },
  h6: { fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h6, lineHeight: 22 },
  body1: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body1, lineHeight: 36, },
  body2: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body2, lineHeight: 30, },
  body3: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body3, lineHeight: 25, },
  body4: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body4, lineHeight: 22, },
  body5: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body5, lineHeight: 22, },
  body6: { fontFamily: CUSTOMFONT_REGULAR, fontSize: SIZES.body6, lineHeight: 22, },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
