import React, { useState } from 'react';
import {View, Text, Platform, TouchableOpacity, Linking, Modal} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {Fonts, Colors, ApplicationStyles} from '../../Themes';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFont from 'react-native-vector-icons/FontAwesome';

export default data => {
  const {item, onPressedCell, pictures, favoritos, setFavoritos, deleteFavoritos} = data;
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

  function addFavorito(){
      setFavoritos(item);
  }

  function deleteFavorito(){
    deleteFavoritos(item);
  }

  const [modal, setModal] = useState(false);

  return (
    <View >
      <Modal style={{flex: 1}}
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
          //Alert.alert('Debe esperar a que termine el video.');
        }}>
        <View style={styles.modalView}>
            
            <View>

              <FastImage
                style={styles.imagenModal}
                source={{
                  uri: validatePicture(email, item.picture.large),
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <TouchableOpacity style={styles.btnCerrar} onPress={()=>{setModal(!modal)}}>
                <Icon name={'times'} size={17} color={'rgb(0,0,0)'} />
              </TouchableOpacity>
              <View style={styles.panelModal}>
                <Text style={Fonts.style.bold(Colors.light, Fonts.size.medium, 'center')}>
                  {name.first} {name.last}
                </Text>
              </View>
            </View>
        </View>
      </Modal>

      

    <TouchableOpacity
      style={[styles.item]}
      onPress={() => {
        onPressedCell(item);
      }}>
      <View >
        <TouchableOpacity onPress={()=>{setModal(!modal)}}>
          <FastImage
            style={styles.image}
            source={{
              uri: validatePicture(email, item.picture.thumbnail),
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </TouchableOpacity>
      </View>
      {/*<FastImage
        style={styles.image}
        source={{
          uri: validatePicture(email, item.picture.thumbnail),
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />*/}
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
          <Icon name={'mobile-alt'} size={15} color={'rgb(255,255,255)'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            sendEmail();
          }}
          style={styles.iconsItem}>
          <Icon name={'envelope'} size={15} color={'rgb(255,255,255)'} />
        </TouchableOpacity>
        {favoritos.includes(item) ? 

        <TouchableOpacity
          onPress={() => {
            deleteFavorito();
          }}
          style={styles.iconsItem}>
          
            <IconFont name={'star'} size={15} color={'rgb(255,255,255)'} />
            
          
          {/*<IconFont name={'star-o'} size={15} color={'rgb(255,255,255)'} />*/}
        </TouchableOpacity>
        :
        <TouchableOpacity
          onPress={() => {
            addFavorito();
          }}
          style={styles.iconsItem}>
          
            <IconFont name={'star-o'} size={15} color={'rgb(255,255,255)'} />
          
          {/*<IconFont name={'star-o'} size={15} color={'rgb(255,255,255)'} />*/}
        </TouchableOpacity>
      }
      </View>
    </TouchableOpacity>
    </View>
  );
};
