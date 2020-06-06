import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './styles';
import {withNavigation} from 'react-navigation';

function CardItem({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ContactDetails', item)}
      style={styles.card}>
      <View style={styles.cardBody}>
        <Image style={styles.cardImage} source={{uri: item.picture.large}} />
        <View style={styles.cardInformation}>
          <Text style={styles.cardNameText}>{`${item.name.first} ${
            item.name.last
          }`}</Text>
          <Text style={styles.cardEmailText}>{`${item.location.state}, ${
            item.nat
          }`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default withNavigation(CardItem);
