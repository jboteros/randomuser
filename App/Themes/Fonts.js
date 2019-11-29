const type = {
  light: 'OpenSans-Light',
  regular: 'OpenSans-Regular',
  bold: 'OpenSans-Bold',
  semiBold: 'OpenSans-SemiBold',
};

const size = {
  bigTitle: 50,
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,
};

const style = {
  bold: (color, fSize, align, letterSpacing) => ({
    fontFamily: type.bold,
    color: color,
    fontSize: fSize,
    textAlign: align,
    lineHeight: fSize * 1.5,
    letterSpacing: letterSpacing,
  }),
  semiBold: (color, fSize, align, letterSpacing) => ({
    fontFamily: type.semiBold,
    color: color,
    fontSize: fSize,
    textAlign: align,
    lineHeight: fSize * 1.5,
    letterSpacing: letterSpacing,
  }),
  regular: (color, fSize, align, letterSpacing) => ({
    fontFamily: type.regular,
    color: color,
    fontSize: fSize,
    textAlign: align,
    lineHeight: fSize * 1.5,
    letterSpacing: letterSpacing,
  }),

  light: (color, fSize, align, letterSpacing) => ({
    fontFamily: type.light,
    color: color,
    fontSize: fSize,
    textAlign: align,
    lineHeight: fSize * 1.5,
    letterSpacing: letterSpacing,
  }),
};

export default {
  type,
  size,
  style,
};
