import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

function CustomTabNavigator({navigation}) {
  const {index} = navigation.state;
  console.log(navigation);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.tab}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.button}>
            <Icon
              name="home"
              size={24}
              color={
                index === 0 ? styles.icon.color : styles.iconInactive.color
              }
            />
            <Text style={index === 0 ? styles.text : styles.textInactive}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tab}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Favorites')}
            style={styles.button}>
            <Icon
              name="star"
              solid
              size={24}
              color={
                index === 2 ? styles.icon.color : styles.iconInactive.color
              }
            />
            <Text style={index === 2 ? styles.text : styles.textInactive}>
              Favorites
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default CustomTabNavigator;
