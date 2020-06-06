import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';

import FastImage from 'react-native-fast-image';

import {Fonts, Colors, ApplicationStyles} from '../../Themes';
import styles from './styles';




export default data => {
  // if (data.profile == null) {
  //   return null;
  // }
  // const {name, email, picture} = data.profile;

  // const {thumbnail} = picture;
  // const {first, last} = name;

  return (
    
    <View >
      <ImageBackground source={require('../../Images/fondoheader.jpg')} style={[styles.container, ]}>
        <View>
          <Text style={Fonts.style.bold(Colors.light, Fonts.size.medium, 'center')}>
            FAVORITOS
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
