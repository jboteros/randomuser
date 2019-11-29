import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';

import Header from '../../Components/Header';
import ContactsListView from '../../Components/ContactsListView';
import Loading from '../../Components/Loading';

import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {loadingContacts: false};
  }

  async componentDidMount() {
    const {setLoading, getProfile} = this.props;

    StatusBar.setBarStyle('light-content', false);

    setLoading(true);
    await getProfile();
    this.onRefresh();
    setLoading(false);
  }

  async onRefresh() {
    const {getContacts} = this.props;
    this.setState({loadingContacts: true});
    await getContacts(1, 20);
    this.setState({loadingContacts: false});
  }

  async loadContacts() {
    const that = this;

    if (this.state.loadingContacts) {
      return;
    }

    this.setState({loadingContacts: true}, async () => {
      const {info, getContacts} = this.props;
      await getContacts(info.page + 1, 20);

      setTimeout(function() {
        that.setState({loadingContacts: false});
      }, 1000);
    });
  }

  render() {
    const {loading, profile, list, navigation} = this.props;
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
            onRefresh={() => {
              this.onRefresh();
            }}
            onPressedCell={rowData => {
              navigation.navigate('ContactDetails', rowData);
            }}
            specialSearch={
              this.state.specialSearch && this.state.isSearchingMode
            }
          />
        </View>
        <Loading loading={loading} />
      </View>
    );
  }
}
