import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import StarFlat from '../../Images/svg/favorite_flat'
import Star from '../../Images/svg/favorite'
import ItemsIcon from '../../Images/svg/items'
import ListIcon from '../../Images/svg/list'

import FastImage from 'react-native-fast-image';

import {Fonts, Colors, ApplicationStyles} from '../../Themes';
import styles from './styles';

export default ({ profile, onFavorite, isFavorite, isLayoutList, onLayout }) => {
  if (profile == null) {
    return null;
  }
  const {name, email, picture} = profile;

  const {thumbnail} = picture;
  const {first, last} = name;

  return (
    <View style={[styles.container, ApplicationStyles.shadown]}>
      <View style={styles.profile}>
          <View>
              <Text style={Fonts.style.bold(Colors.light, Fonts.size.medium, 'left')}>
                  {first} {last}
              </Text>
              <Text
                  style={Fonts.style.regular(Colors.light, Fonts.size.small, 'left')}>
                  {email}
              </Text>
          </View>
          <FastImage
              style={styles.image}
              source={{
                  uri: thumbnail,
                  priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
          />
      </View>
      <View style={styles.layout}>
          <View style={styles.layoutController}>
              <TouchableOpacity onPress={onLayout}>
                  <ItemsIcon height={22} width={22} color={!isLayoutList ?
                      Colors.accentColorLight :
                      Colors.gray
                  } />
              </TouchableOpacity>

              <TouchableOpacity  onPress={onLayout}>
                  <ListIcon height={22} width={22} color={isLayoutList ?
                      Colors.accentColorLight :
                      Colors.gray
                  } />
              </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onFavorite} >
              {
                  isFavorite ?
                      <Star height={22} width={22} color={Colors.accentColorLight} /> :
                      <StarFlat height={22} width={22} color={Colors.accentColorLight} />
              }
          </TouchableOpacity>
      </View>
    </View>
  );
};
