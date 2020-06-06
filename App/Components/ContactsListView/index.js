import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator, RefreshControl} from 'react-native';

import InfiniteScrollView from 'react-native-infinite-scroll';

import ContactListItem from '../ContactListItem';

import styles from './styles';
import {Colors, Metrics} from '../../Themes';
import Button from '../../Components/CommonComponents/Button';
import Icon from "react-native-vector-icons/FontAwesome5";
import {NavigationActions} from 'react-navigation';

export default class ContactsListView extends Component {
  constructor(props) {
    super(props);
  }

    openUrl1(url) {
        console.log(url);
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    }

  renderFooter() {
    if (!this.props.isRefreshing && this.props.loading) {
      return (
        <ActivityIndicator
          hidesWhenStopped={true}
          style={{marginVertical: Metrics.addFooter + 15}}
        />
      );
    }

    return null;
  }
  render() {
    const {
      contacts,
      onLoadContacts,
      moreContacts,
      isRefreshing,
      onRefresh,
      pictures,
    } = this.props;


    return (
      <InfiniteScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => onRefresh()}
            tintColor={Colors.gray}
          />
        }
        distanceFromEnd={15}
        canLoadMore={moreContacts}
        onLoadMoreAsync={() => onLoadContacts()}>
        <View style={styles.marginScroll} />
        <FlatList
          data={contacts}
          renderItem={({item, index}) => (
            <ContactListItem
              key={index}
              item={item}
              pictures={pictures}
              onPressedCell={() => {
                this.props.onPressedCell(item);
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          ListFoterComponent={this.renderFooter.bind(this)}
        />
        <View>
            <Button
                onPress={() =>
                    NavigationActions.navigate({routeName: 'NewContact'})
                }
                style={styles.fab}>
                <Icon name={'plus'} size={15} color={Colors.white} />
            </Button>
        </View>

      </InfiniteScrollView>
    );
  }
}
