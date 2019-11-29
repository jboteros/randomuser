import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';


import {Fonts, Colors, Images} from '../../Themes';
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
