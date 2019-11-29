import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {Fonts, Colors, ApplicationStyles} from '../../Themes';

export default data => {
  const {item, onPressedCell} = data;
  return (
    <TouchableOpacity
      style={[styles.item, ApplicationStyles.shadown]}
      onPress={() => {
        onPressedCell(item);
      }}>
      <FastImage
        style={styles.image}
        source={{
          uri: item.picture.thumbnail,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.textContainer}>
        <Text style={Fonts.style.bold(Colors.dark, Fonts.size.medium, 'left')}>
          {item.name.first} {item.name.last}
        </Text>
        <Text
          style={Fonts.style.regular(Colors.dark, Fonts.size.small, 'left')}>
          {item.email}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
