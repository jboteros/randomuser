import React, {Component} from 'react';
import {View} from 'react-native';

import Header from '../../Components/Header';

import styles from './styles';

export default class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    const {navigation, profile, loading} = this.props;
    console.log('navigation', navigation);
    // const {} = navigation.getParam;
    // const {} = this.state;
    return (
      <View style={styles.container}>
        <Header profile={profile} />
        <View style={styles.contentList}></View>
        {loading && <View style={styles.loading} />}
      </View>
    );
  }
}
