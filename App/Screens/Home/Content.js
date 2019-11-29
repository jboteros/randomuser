import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';

import {Colors, Images, Fonts} from '../../Themes';

import Header from '../../Components/Header';
import ContactsListView from '../../Components/ContactsListView';

import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const {setLoading, getContacts, getProfile} = this.props;
    console.log('props', this.props);
    setLoading(true);
    await getProfile();
    await getContacts(0, 10);
    setLoading(false);
    console.log('props', this.props);
  }
  render() {
    const {loading, profile, list} = this.props;
    const {} = this.state;
    return (
      <View style={styles.container}>
        <Header profile={profile} />
        <View style={styles.scrollView}>
          <ContactsListView list={list} />
        </View>
        {loading && <View style={styles.loading} />}
      </View>
    );
  }
}
