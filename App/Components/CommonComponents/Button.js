import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {Fonts, Colors, ApplicationStyles,Sizes} from '../../Themes';

class Button extends Component {
  render() {
    const {
      style,
      opacity,
      gradient,
      color,
      startColor,
      endColor,
      end,
      start,
      locations,
      shadow,
      children,
      text,
      normal,
      outline,
      ...props
    } = this.props;

    var buttonStyles = [];

    if (text) {
      buttonStyles = [
        styles.buttonText,
        shadow && styles.shadow,
        color && styles[color], // predefined styles colors for backgroundColor
        color && !styles[color] && {backgroundColor: color}, // custom backgroundColor
        style,
      ];
    } else if (outline) {
      buttonStyles = [
        styles.buttonOutline,
        shadow && styles.shadow,
        color && styles[color], // predefined styles colors for backgroundColor
        color && !styles[color] && {backgroundColor: color}, // custom backgroundColor
        style,
      ];
    } else if (normal) {
      buttonStyles = [styles.buttonNormal, style];
    } else {
      buttonStyles = [
        styles.button,
        shadow && styles.shadow,
        color && styles[color], // predefined styles colors for backgroundColor
        color && !styles[color] && {backgroundColor: color}, // custom backgroundColor
        style,
      ];
    }

    if (gradient) {
      return (
        <TouchableOpacity
          style={buttonStyles}
          activeOpacity={opacity}
          {...props}>
          <LinearGradient
            start={start}
            end={end}
            locations={locations}
            style={buttonStyles}
            colors={[startColor, endColor]}>
            {children}
          </LinearGradient>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={buttonStyles}
        activeOpacity={opacity || 0.8}
        {...props}>
        {children}
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  startColor: Colors.accentColor,
  endColor: Colors.accentColorLight,
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: Colors.white,
};

export default Button;

const styles = StyleSheet.create({
  buttonNormal: {
    marginVertical: 0,
    paddingVertical: 0,
    borderRadius: 0,
    justifyContent: 'center',
  },
  button: {
    borderRadius: Sizes.radius,
    height: Sizes.heightButton,
    justifyContent: 'center',
    marginVertical: Sizes.base,
  },
  buttonOutline: {
    borderRadius: Sizes.radius,
    height: Sizes.heightButton,
    justifyContent: 'center',
    marginVertical: Sizes.base / 4,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.accentColor,
  },
  buttonText: {
    borderRadius: Sizes.radius,
    height: Sizes.base,
    justifyContent: 'center',
    marginVertical: Sizes.base / 4,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  accent: {backgroundColor: Colors.accentColor},
  primary: {backgroundColor: Colors.accentColor},
  secondary: {backgroundColor: Colors.accentColorLight},
  tertiary: {backgroundColor: Colors.tertiary},
  black: {backgroundColor: Colors.black},
  white: {backgroundColor: Colors.white},
  gray: {backgroundColor: Colors.gray},
  gray2: {backgroundColor: Colors.gray2},
  gray3: {backgroundColor: Colors.gray3},
  gray4: {backgroundColor: Colors.gray4},
});
