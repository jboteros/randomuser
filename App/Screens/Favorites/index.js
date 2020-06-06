import React from 'react';
import {View, FlatList} from 'react-native';
import Header from '../../Components/Header';
import {connect} from 'react-redux';
import {getFavorites} from '../../Core/Favorites/Actions';
import styles from './styles';
import CardItem from '../../Components/CardItem';
import FavoriteListEmpty from '../../Components/FavoriteListEmpty';

const Favorites = ({profile, favorites, navigation}) => {

  return (
    <View style={styles.container}>
      <Header profile={profile} />
      <FlatList
        style={styles.flatList}
        data={favorites}
        renderItem={({item}) => <CardItem item={item} />}
        ListEmptyComponent={<FavoriteListEmpty />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getFavorites: () => dispatch(getFavorites()),
  };
};

const mapStateToProps = ({favorites, contacts}) => {
  return {
    favorites: favorites.list,
    profile: contacts.profile,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites);
