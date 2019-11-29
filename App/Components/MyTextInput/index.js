/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */
import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './styles';

export default data => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize={data.autoCapitalize}
        textContentType={data.textContent}
        secureTextEntry={data.secureText}
        placeholder={data.pHolder}
        style={styles.textInput}
        onChangeText={text => data.onChangeText(text)}
        value={data.text}
      />
    </View>
  );
};
