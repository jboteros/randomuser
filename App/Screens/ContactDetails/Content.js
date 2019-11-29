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

import HeaderNavigation from '../../Components/HeaderNavigation';
import ItemContact from '../../Components/ItemContact';
import MapView from '../../Components/MapView';

import styles from './styles';
import {Fonts, Colors, ApplicationStyles} from '../../Themes';
import Loading from '../../Components/Loading';

export default class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

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
                uri: picture.thumbnail,
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
              <FastImage
                style={styles.imageSmall}
                source={{
                  uri: picture.large,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
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
