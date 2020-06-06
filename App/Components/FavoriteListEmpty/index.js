import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

export default function FavoriteListEmpty() {
  return (
    <View style={styles.container}>
      <Icon name="frown" size={60} color={styles.icon.color} />
      <Text style={styles.text}>No Favorites yet...</Text>
    </View>
  );
}
