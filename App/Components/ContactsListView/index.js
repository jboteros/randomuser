import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import InfiniteScrollView from 'react-native-infinite-scroll';
import FastImage from 'react-native-fast-image';

import styles from './styles';

import {Fonts, Colors, Metrics} from '../../Themes';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class ContactsListView extends Component {
  constructor(props) {
    super(props);
  }

  onPressedCell(rowData) {
    console.log('onPressedCell', rowData);
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
      loading,
      onRefresh,
    } = this.props;

    console.log('contacts', contacts.length);
    return (
      <InfiniteScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => onRefresh()}
            tintColor={Colors.gray}
          />
        }
        distanceFromEnd={10}
        canLoadMore={moreContacts}
        onLoadMoreAsync={() => onLoadContacts()}>
        <FlatList
          data={contacts}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => this.onPressedCell(item)}>
              <FastImage
                style={styles.image}
                source={{
                  uri: item.picture.thumbnail,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
              <View style={styles.textContainer}>
                <Text
                  style={Fonts.style.bold(
                    Colors.dark,
                    Fonts.size.medium,
                    'left',
                  )}>
                  {index} {item.name.first} {item.name.last}
                </Text>
                <Text
                  style={Fonts.style.regular(
                    Colors.dark,
                    Fonts.size.small,
                    'left',
                  )}>
                  {item.email}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          ListFoterComponent={this.renderFooter.bind(this)}
        />
      </InfiniteScrollView>
    );
  }
}
