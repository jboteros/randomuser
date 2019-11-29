import React from 'react';
import {View, Text, Platform, TouchableOpacity, Linking} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {Fonts, Colors, ApplicationStyles} from '../../Themes';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default data => {
  const {item, onPressedCell, pictures} = data;
  const {name, email, cell, location} = item;

  function validatePicture(mail, image) {
    let idex = pictures.findIndex(i => i.email === mail);

    if (idex !== -1) {
      return pictures[idex].uri;
    } else {
      return image;
    }
  }

  function dialCall() {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${cell}`;
    } else {
      phoneNumber = `telprompt:${cell}`;
    }
    Linking.openURL(phoneNumber);
  }

  function sendEmail() {
    Linking.openURL(`mailto:${email}`);
  }

  function goLocation() {
    const {coordinates} = location;
    const {latitude, longitude} = coordinates;

    // eslint-disable-next-line prettier/prettier
    const label = `${location.street.number} ${location.street.name}, ${location.city} ${location.state}, ${location.country}`;

    const url = Platform.select({
      ios: 'maps:' + latitude + ',' + longitude + '?q=' + label,
      android: 'geo:' + latitude + ',' + longitude + '?q=' + label,
    });
    Linking.openURL(url);
  }

  return (
    <TouchableOpacity
      style={[styles.item, ApplicationStyles.shadown]}
      onPress={() => {
        onPressedCell(item);
      }}>
      <FastImage
        style={styles.image}
        source={{
          uri: validatePicture(email, item.picture.thumbnail),
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.textContainer}>
        <Text style={Fonts.style.bold(Colors.dark, Fonts.size.medium, 'left')}>
          {name.first} {name.last}
        </Text>
        <Text
          style={Fonts.style.regular(Colors.dark, Fonts.size.small, 'left')}>
          {email}
        </Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => {
            dialCall();
          }}
          style={styles.iconsItem}>
          <Icon name={'mobile-alt'} size={15} color={'rgb(0,98,150)'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            sendEmail();
          }}
          style={styles.iconsItem}>
          <Icon name={'envelope'} size={15} color={'rgb(0,98,150)'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            goLocation();
          }}
          style={styles.iconsItem}>
          <Icon name={'map-marker-alt'} size={15} color={'rgb(0,98,150)'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
