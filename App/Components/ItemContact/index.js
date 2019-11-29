import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import {Fonts, Colors} from '../../Themes';

export default data => {
  const {title, value, icon} = data;
  return (
    <View style={styles.container}>
      <Text style={Fonts.style.light(Colors.dark, Fonts.size.small, 'left')}>
        {title}
      </Text>
      <Text style={Fonts.style.bold(Colors.dark, Fonts.size.medium, 'left')}>
        {value}
      </Text>
    </View>
  );
};
