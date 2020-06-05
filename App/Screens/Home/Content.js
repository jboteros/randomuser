import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';

import Header from '../../Components/Header';
import ContactsListView from '../../Components/ContactsListView';
import ContactsCardstView from '../../Components/ContactCardsView';

import Loading from '../../Components/Loading';

import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingContacts: false,
      favoriteView: false,
      listView: false
    };
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

  switcherFavoriteView = () => {
    this.setState({
      favoriteView: !this.state.favoriteView
    })
  }

  switcherViewType = () => {
    this.setState({
       listView: !this.state.listView
    })
  }

  getFavoriteItems = () => {
    const { favoritesCells, list } = this.props
    const results = []

    for (const cell of favoritesCells) {
      const value = list.find(listItem => listItem.cell === cell)
      if (value) {
        results.push(value)
      }
    }

    return results
  }

  render() {
    const {loading, profile, pictures, list, navigation} = this.props;
    const {loadingContacts, favoriteView, listView} = this.state;

    const listOfValuesToRender = favoriteView ? this.getFavoriteItems() : list
    const allProps = {
      list: listOfValuesToRender,
      contacts: listOfValuesToRender,
      currentLocation: this.props.currentLocation,
      moreContacts: true,
      pictures: pictures,
      loading: loadingContacts,
      onLoadContacts: () => {
        this.loadContacts();
      },
      isRefreshing: loadingContacts,
      onRefresh: () => {
        this.onRefresh();
      },
      onPressedCell: rowData => {
        navigation.navigate('ContactDetails', rowData);
      },
      specialSearch: this.state.specialSearch && this.state.isSearchingMode
    }

    return (
      <View style={styles.container}>
        <Header
            isLayoutList={listView}
            onLayout={this.switcherViewType}
            profile={profile}
            isFavorite={favoriteView}
            onFavorite={this.switcherFavoriteView}
        />
        <View style={styles.contentList}>
          {
            listView ?
                <ContactsCardstView {...allProps} /> :
                <ContactsListView {...allProps} />
          }
        </View>
        <Loading loading={loading} />
      </View>
    );
  }
}
