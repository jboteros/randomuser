import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import {Fonts, Colors} from '../../Themes';

export default data => {
  const {title, value, icon, color} = data;
  return (
    <TouchableOpacity style={styles.container} onPress={() => data.action()}>
      <Text
        style={Fonts.style.light(
          //Colors.accentColorLight,
          //'rgb(68,18,58)',
          color,
          Fonts.size.small,
          'left',
        )}>
        <Icon name={icon} size={Fonts.size.small} color={color} />{' '}
        {title}
      </Text>
      <Text style={Fonts.style.bold(Colors.dark, Fonts.size.medium, 'left')}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};
