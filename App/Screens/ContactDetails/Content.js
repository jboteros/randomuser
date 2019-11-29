import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  Linking,
} from 'react-native';

import moment from 'moment';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ImagePicker from 'react-native-image-picker';
import HeaderNavigation from '../../Components/HeaderNavigation';
import ItemContact from '../../Components/ItemContact';
import MapView from '../../Components/MapView';

import styles from './styles';
import {Fonts, Colors, ApplicationStyles} from '../../Themes';
import Loading from '../../Components/Loading';

const options = {
  title: 'Update contact picture',
  // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images/users',
    avatarSource: '',
    maxHeight: 250,
    maxWidth: 250,
    mediaType: 'photo',
  },
};

export default class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async openModalPic() {
    const {setLoading, navigation} = this.props;
    const {email} = navigation.state.params;

    setLoading(true);
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        setLoading(false);
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        setLoading(false);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        setLoading(false);
      } else {
        let data = {email, ...response};
        this.saveImage(data);
      }
    });
  }

  validatePicture(email, image) {
    const {pictures} = this.props;

    let idex = pictures.findIndex(i => i.email === email);

    if (idex !== -1) {
      return pictures[idex].uri;
    } else {
      return image;
    }
  }

  async saveImage(data) {
    const {setLoading, setPictures} = this.props;
    await setPictures(data);
    setLoading(false);
  }

  dialNumber(number) {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  }

  sendEmail() {
    const {navigation} = this.props;
    const {email} = navigation.state.params;
    Linking.openURL(`mailto:${email}`);
  }

  goLocation() {
    const {navigation} = this.props;
    const {location} = navigation.state.params;
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

  render() {
    const {navigation, loading} = this.props;
    const {
      gender,
      cell,
      dob,
      email,
      location,
      name,
      phone,
      picture,
    } = navigation.state.params;

    const {age, date} = dob;
    const {first, last} = name;

    const {coordinates} = location;
    const {latitude, longitude} = coordinates;

    return (
      <View style={styles.container}>
        <View style={styles.contentList}>
          <View style={[styles.image, ApplicationStyles.shadown]}>
            <View style={styles.imageBg} />
            <Image
              opacity={0.5}
              blurRadius={Platform.OS === 'ios' ? 5 : 1}
              style={styles.imageBg}
              source={{
                uri: this.validatePicture(email, picture.thumbnail),
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.ovalContainer}>
              <View style={styles.ovalItem}>
                <View style={styles.itemBasic}>
                  <Icon name={gender} size={24} color={'white'} />
                  <Text
                    style={Fonts.style.regular(
                      Colors.light,
                      Fonts.size.small,
                      'left',
                    )}>
                    Gender
                  </Text>
                </View>
                <View style={styles.itemBasic}>
                  <Text
                    style={Fonts.style.bold(
                      Colors.light,
                      Fonts.size.input,
                      'left',
                    )}>
                    {age}
                  </Text>
                  <Text
                    style={Fonts.style.regular(
                      Colors.light,
                      Fonts.size.small,
                      'left',
                    )}>
                    Age
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.openModalPic();
                }}>
                <FastImage
                  style={styles.imageSmall}
                  source={{
                    uri: this.validatePicture(email, picture.large),
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={Fonts.style.bold(Colors.light, Fonts.size.medium, 'left')}>
              {first} {last}
            </Text>
            <Text
              style={Fonts.style.regular(
                Colors.light,
                Fonts.size.small,
                'left',
              )}>
              {email}
            </Text>

            <View style={styles.ctaContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.dialNumber(cell);
                }}
                style={styles.ctaItem}>
                <Icon name={'mobile-alt'} size={24} color={'rgb(0,98,150)'} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.sendEmail();
                }}
                style={styles.ctaItem}>
                <Icon name={'envelope'} size={24} color={'rgb(0,98,150)'} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={styles.itemsContact}>
            <ItemContact
              icon={'phone'}
              title={'Phone:'}
              value={phone}
              action={() => this.dialNumber(phone)}
            />
            <ItemContact
              icon={'mobile-alt'}
              title={'Cell:'}
              value={cell}
              action={() => this.dialNumber(cell)}
            />
            <ItemContact
              icon={'birthday-cake'}
              title={'Birthday:'}
              value={`${moment(date).format('LL')}, ${age} years old`}
              action={() => this.goLocation()}
            />
            <ItemContact
              icon={'map-marker-alt'}
              title={'Location:'}
              // eslint-disable-next-line prettier/prettier
              value={`${location.street.number} ${location.street.name}, ${location.city} ${location.state}, ${location.country}`}
              action={() => this.goLocation()}
            />
            <MapView
              coordinates={{latitude, longitude}}
              action={() => this.goLocation()}
            />

            <View style={styles.marginScroll} />
          </ScrollView>
        </View>
        <HeaderNavigation
          goBack={() => {
            navigation.goBack();
          }}
        />
        <Loading loading={loading} />
      </View>
    );
  }
}
