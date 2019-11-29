import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

import HeaderNavigation from '../../Components/HeaderNavigation';
import ItemContact from '../../Components/ItemContact';

import styles from './styles';
import {Fonts, Metrics, ApplicationStyles} from '../../Themes';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MapView from '../../Components/MapView';

export default class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    const {navigation, profile, loading} = this.props;
    const {
      gender,
      cell,
      dob,
      id,
      email,
      location,
      name,
      nat,
      phone,

      picture,
    } = navigation.state.params;

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
              blurRadius={5}
              style={styles.imageBg}
              source={{
                uri: picture.thumbnail,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />

            <FastImage
              style={styles.imageSmall}
              source={{
                uri: picture.large,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
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
              <View style={styles.ctaItem}>
                <Text
                  style={Fonts.style.regular(
                    Colors.light,
                    Fonts.size.small,
                    'left',
                  )}>
                  Phone
                </Text>
              </View>
              <View style={styles.ctaItem}>
                <Text
                  style={Fonts.style.regular(
                    Colors.light,
                    Fonts.size.small,
                    'left',
                  )}>
                  email
                </Text>
              </View>
            </View>
          </View>
          <ScrollView style={styles.itemsContact}>
            <ItemContact title={'Phone:'} value={phone} />
            <ItemContact title={'Cell:'} value={cell} />
            <ItemContact
              title={'Birthday:'}
              value={moment(dob.date).format('LLL')}
            />
            <ItemContact
              title={'Location:'}
              value={`${location.street.number} ${location.street.name}, ${location.city} ${location.state}, ${location.country}`}
            />
            <MapView coordinates={{latitude, longitude}} />

            <View style={styles.marginScroll} />
          </ScrollView>
        </View>
        <HeaderNavigation
          goBack={() => {
            navigation.goBack();
          }}
        />
        {loading && <View style={styles.loading} />}
      </View>
    );
  }
}
