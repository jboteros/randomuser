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
    this.state = {loadingContacts: false};
  }

  async componentDidMount() {
    const {setLoading, getProfile} = this.props;
    setLoading(true);
    await getProfile();
    this.onRefresh();
    setLoading(false);
  }

  async onRefresh() {
    const {setLoading, getContacts} = this.props;
    this.setState({loadingContacts: true});
    await getContacts(1, 20);
    this.setState({loadingContacts: false});
  }

  async loadContacts() {
    const {setLoading, info, getContacts} = this.props;
    console.log('loadContacts:info', info);
    await getContacts(info.page + 1, 20);
    this.setState({loadingContacts: false});
  }

  render() {
    const {loading, profile, list} = this.props;
    const {loadingContacts} = this.state;
    return (
      <View style={styles.container}>
        <Header profile={profile} />
        <View style={styles.contentList}>
          <ContactsListView
            list={list}
            contacts={list}
            currentLocation={this.props.currentLocation}
            moreContacts={true}
            loading={loadingContacts}
            onLoadContacts={() => {
              this.loadContacts();
            }}
            isRefreshing={loadingContacts}
            onRefresh={() => this.onRefresh()}
            onPressedCell={rowData => {
              console.log('home:onPress', rowData);
            }}
            specialSearch={
              this.state.specialSearch && this.state.isSearchingMode
            }
          />
        </View>
        {loading && <View style={styles.loading} />}
      </View>
    );
  }
}
