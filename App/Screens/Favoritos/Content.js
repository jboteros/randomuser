import React, {Component} from 'react';
import {View, StatusBar, TouchableOpacity, Text, ImageBackground} from 'react-native';

import Header from '../../Components/HeaderFavoritos';
import ContactsListView from '../../Components/ContactsListView';
import Loading from '../../Components/Loading';

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFont from 'react-native-vector-icons/FontAwesome';


import {Fonts, Colors, ApplicationStyles} from '../../Themes';

import styles from './styles';

export default class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {loadingContacts: false};
  }

  async componentDidMount() {
    const {setLoading, getProfile} = this.props;

    StatusBar.setBarStyle('light-content', false);

  }

  cerrarModal(){
    this.props.callback(false);
  }


  render() {

    const {loading, pictures, list, navigation, favoritos, setFavoritos, deleteFavoritos} = this.props;
    //console.log("Lista",list);
    //console.log("Global", global.favoritos);
    
    var newList=[];
    for (var i = 0; i < list.length; i++) {
      if(favoritos.includes(list[i].email)){
        newList.push(list[i]);
      }
    }
    const {loadingContacts} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <ImageBackground source={require('../../Images/fondoheader.jpg')} style={[styles.containerHeader, ApplicationStyles.shadown,]}>
          <View>
            <Text style={Fonts.style.bold(Colors.light, Fonts.size.medium, 'center')}>
              FAVORITOS
            </Text>
        </View>
      </ImageBackground>
    </View>
        <View style={styles.contentList}>
          <ContactsListView
            list={favoritos}
            contacts={favoritos}
            favoritos={favoritos}
            setFavoritos={setFavoritos}
            deleteFavoritos={deleteFavoritos}
            currentLocation={this.props.currentLocation}
            moreContacts={false}
            pictures={pictures}
            loading={loadingContacts}
            onLoadContacts={() => {
              this.loadContacts();
            }}
            isRefreshing={loadingContacts}
            
            onPressedCell={rowData => {
              this.cerrarModal();
              navigation.navigate('ContactDetails', rowData);

            }}
            specialSearch={
              this.state.specialSearch && this.state.isSearchingMode
            }
          />
        </View>
        <Loading loading={loading} />
        
      </View>
    );
  }
}
