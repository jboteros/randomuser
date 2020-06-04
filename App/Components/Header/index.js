import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';

import FastImage from 'react-native-fast-image';

import {Fonts, Colors, ApplicationStyles} from '../../Themes';
import styles from './styles';




export default data => {
  if (data.profile == null) {
    return null;
  }
  const {name, email, picture} = data.profile;

  const {thumbnail} = picture;
  const {first, last} = name;

  return (
    
    <View >
      <ImageBackground source={require('../../Images/fondoheader.jpg')} style={[styles.container, ApplicationStyles.shadown, styles.header]}>
        <View style={{marginLeft: 70}}>
          <Text style={Fonts.style.bold(Colors.light, Fonts.size.medium, 'center')}>
            {first.toUpperCase()} {last.toUpperCase()}
          </Text>
          <Text
            style={Fonts.style.regular(Colors.light, Fonts.size.small, 'left')}>
            {email}
          </Text>
        </View>
        <FastImage
          style={styles.image}
          source={{
            uri: thumbnail,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </ImageBackground>
    </View>
  );
};
