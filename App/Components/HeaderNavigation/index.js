import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {Images} from '../../Themes';
import styles from './styles';

export default data => {
  const {goBack} = data;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}>
        <Image style={styles.image} source={Images.arrow} />
      </TouchableOpacity>
    </View>
  );
};
