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
import Icon from 'react-native-vector-icons/FontAwesome5';

import HeaderNavigation from '../../Components/HeaderNavigation';
import styles from './styles';
import {Fonts, Colors, ApplicationStyles, Sizes} from '../../Themes';
import Loading from '../../Components/Loading';

const options = {
  title: 'Add contact ',
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

  render() {
    const {navigation, loading} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.contentList}>

          <Text
              style={{
                marginTop: Sizes.base * 2,
                textDecorationLine: 'underline',
              }}>
            Agregar contacto
          </Text>
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
