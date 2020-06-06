import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import ImagePicker from 'react-native-image-picker';
import MapView from '../../Components/MapView';

import styles from './styles';
import format from 'date-fns/format';
import {connect} from 'react-redux';
import {
  getFavorites,
  saveFavorite,
  deleteFavorite,
} from '../../Core/Favorites/Actions';

const options = {
  title: 'Update contact picture',
  storageOptions: {
    skipBackup: true,
    path: 'images/users',
    avatarSource: '',
    maxHeight: 250,
    maxWidth: 250,
    mediaType: 'photo',
  },
};

const ContactDetails = props => {
  const {navigation, favorites} = props;
  const {
    cell,
    dob,
    email,
    location,
    name,
    phone,
    picture,
    login,
  } = navigation.state.params;
  const {age, date} = dob;
  const {first, last} = name;
  const {coordinates, street, city, state, country} = location;
  const {latitude, longitude} = coordinates;
  const [isFavorite, setIsFavorite] = useState(false);

  async function openModalPic() {
    const {setLoading} = props;

    setLoading(true);
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        setLoading(false);
      } else if (response.error) {
        setLoading(false);
      } else if (response.customButton) {
        setLoading(false);
      } else {
        let data = {email, ...response};
        saveImage(data);
      }
    });
  }

  function validatePicture(email, image) {
    const {pictures} = props;

    let idex = pictures.findIndex(i => i.email === email);

    if (idex !== -1) {
      return pictures[idex].uri;
    } else {
      return image;
    }
  }

  async function saveImage(data) {
    const {setLoading, setPictures} = props;
    await setPictures(data);
    setLoading(false);
  }

  function dialNumber(number) {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  }

  function sendEmail() {
    Linking.openURL(`mailto:${email}`);
  }

  function goLocation() {
    const label = `${location.street.number} ${location.street.name}, ${
      location.city
    } ${location.state}, ${location.country}`;

    const url = Platform.select({
      ios: 'maps:' + latitude + ',' + longitude + '?q=' + label,
      android: 'geo:' + latitude + ',' + longitude + '?q=' + label,
    });
    Linking.openURL(url);
  }

  async function addToFavorite() {
    if (isFavorite) {
      props.deleteFavorite(props.navigation.state.params);
    } else {
      props.saveFavorite(props.navigation.state.params);
    }
    setIsFavorite(!isFavorite);
  }

  function verifyFavorite() {
    const favorite = favorites.filter(d => d.login.uuid === login.uuid);
    setIsFavorite(favorite.length > 0);
  }

  useEffect(() => {
    verifyFavorite();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.header}>
            <Icon name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
          <Animatable.View
            style={{alignItems: 'center'}}
            animation="bounceInUp"
            iterationCount={1}
            duration={1700}
            direction="alternate"
            style={styles.informationContainer}>
            <View style={styles.cardInformation}>
              <View
                style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => openModalPic()}
                  style={styles.imageContainer}>
                  <FastImage
                    style={styles.imageSmall}
                    source={{
                      uri: validatePicture(email, picture.large),
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.contactName}>{`${first} ${last}`}</Text>
              <View style={styles.actionsContainer}>
                <TouchableOpacity
                  onPress={() => dialNumber(cell)}
                  style={styles.actionButton}>
                  <Icon name="phone" size={24} color="#F43556" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => sendEmail()}
                  style={styles.actionButton}>
                  <Icon name="envelope" size={24} color="#F43556" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => addToFavorite()}
                  style={[styles.actionButton, {padding: 9}]}>
                  {isFavorite ? (
                    <Animatable.View
                      animation="bounceIn"
                      iterationCount={1}
                      direction="alternate">
                      <Icon name="star" solid size={24} color="#F43556" />
                    </Animatable.View>
                  ) : (
                    <Icon name="star" size={24} color="#F43556" />
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.informationCardBody}>
                <View style={styles.cardBody}>
                  <View style={styles.iconContainer}>
                    <Icon name="phone" size={24} color={styles.icon.color} />
                  </View>
                  <Text numberOfLines={1} style={styles.cardBodyText}>
                    {phone}
                  </Text>
                </View>
                <View style={styles.cardBody}>
                  <View style={styles.iconContainer}>
                    <Icon
                      name="mobile-alt"
                      size={24}
                      color={styles.icon.color}
                    />
                  </View>
                  <Text numberOfLines={1} style={styles.cardBodyText}>
                    {cell}
                  </Text>
                </View>
              </View>
              <View style={styles.informationCardBody}>
                <View style={styles.cardBody}>
                  <View style={styles.iconContainer}>
                    <Icon
                      name="birthday-cake"
                      size={30}
                      color={styles.icon.color}
                    />
                  </View>
                  <Text numberOfLines={2} style={styles.cardBodyText}>
                    {`${format(
                      new Date(date),
                      'MMM d yyyy',
                    )}, ${age} years old`}
                  </Text>
                </View>
              </View>
              <View style={styles.informationCardBody}>
                <View style={styles.cardBody}>
                  <View style={styles.iconContainer}>
                    <Icon name="envelope" size={30} color={styles.icon.color} />
                  </View>
                  <Text numberOfLines={2} style={styles.cardBodyText}>
                    {email}
                  </Text>
                </View>
              </View>
              <View style={styles.informationCardBody}>
                <View style={styles.cardBody}>
                  <View style={styles.iconContainer}>
                    <Icon
                      name="map-marker-alt"
                      size={30}
                      color={styles.icon.color}
                    />
                  </View>
                  <Text numberOfLines={3} style={styles.cardBodyText}>
                    {`${street.number} ${
                      street.name
                    }, ${city} ${state}, ${country}`}
                  </Text>
                </View>
              </View>
              <View style={styles.mapContainer}>
                <MapView
                  customStyle={styles.map}
                  coordinates={{latitude, longitude}}
                  action={() => goLocation()}
                />
              </View>
            </View>
          </Animatable.View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getFavorites: () => dispatch(getFavorites()),
    saveFavorite: data => dispatch(saveFavorite(data)),
    deleteFavorite: data => dispatch(deleteFavorite(data)),
  };
};

const mapStateToProps = ({favorites}) => {
  return {
    favorites: favorites.list,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactDetails);
