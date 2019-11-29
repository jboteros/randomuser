import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';

import {Colors, Images, Fonts} from '../../Themes';

import MyTextInput from '../../Components/MyTextInput';

import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const {setLoading, getContacts, getProfile} = this.props;
    console.log('props', this.props);
    setLoading(true);
    await getProfile();
    await getContacts(0, 10);
    setLoading(false);
    console.log('props', this.props);
  }
  render() {
    const {loading} = this.props;
    const {} = this.state;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          // style={{position: 'absolute', flex: 1}}
          behavior="padding"
          enabled>
          <ScrollView style={styles.scrollView}>
            <Text
              style={Fonts.style.regular(
                Colors.dark,
                Fonts.size.small,
                'left',
              )}>
              Name:{' '}
              <Text
                style={Fonts.style.bold(Colors.dark, Fonts.size.small, 'left')}>
                TEXT
              </Text>
            </Text>
          </ScrollView>
        </KeyboardAvoidingView>

        {loading && <View style={styles.loading} />}
      </View>
    );
  }
}
