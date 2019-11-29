import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import {Fonts, Colors} from '../../Themes';

export default data => {
  const {title, value, icon} = data;
  return (
    <View style={styles.container}>
      <Text
        style={Fonts.style.light(
          Colors.accentColorLight,
          Fonts.size.small,
          'left',
        )}>
        <Icon name={icon} size={Fonts.size.small} color={'rgb(0,98,150)'} />{' '}
        {title}
      </Text>
      <Text style={Fonts.style.bold(Colors.dark, Fonts.size.medium, 'left')}>
        {value}
      </Text>
    </View>
  );
};
