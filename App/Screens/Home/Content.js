import React, {Component} from 'react';
import {View, StatusBar, TouchableOpacity, Text, Modal} from 'react-native';

import Header from '../../Components/Header';
import ContactsListView from '../../Components/ContactsListView';
import Loading from '../../Components/Loading';

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFont from 'react-native-vector-icons/FontAwesome';

import Favoritos from '../Favoritos';

import styles from './styles';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {loadingContacts: false, modal: false};

    //global.favoritos = ['aubrey.edwards@example.com', 'dale.turner@example.com']; 
  }

  async componentDidMount() {
    const {setLoading, getProfile} = this.props;

    StatusBar.setBarStyle('light-content', false);

    setLoading(true);
    await getProfile();
    this.onRefresh();
    setLoading(false);
  }

  async onRefresh() {
    const {getContacts} = this.props;
    this.setState({loadingContacts: true});
    await getContacts(1, 20);
    this.setState({loadingContacts: false});
  }

  async loadContacts() {
    const that = this;

    if (this.state.loadingContacts) {
      return;
    }

    this.setState({loadingContacts: true}, async () => {
      const {info, getContacts} = this.props;
      await getContacts(info.page + 1, 20);

      setTimeout(function() {
        that.setState({loadingContacts: false});
      }, 1000);
    });
  }

  getResponse(result){
    this.setState({
      modal: false, 
    });
  }

  render() {
    const {loading, profile, pictures, list, navigation, favoritos, setFavoritos, deleteFavoritos} = this.props;
    const {loadingContacts, modal} = this.state;

    return (
      <View style={styles.container}>

        <Modal style={{flex: 1}}
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
          //Alert.alert('Debe esperar a que termine el video.');
        }}>
          <View style={styles.modalView}>
              
                
              <Favoritos navigation={navigation} callback={this.getResponse.bind(this)}/>
                <TouchableOpacity style={styles.btnCerrar} onPress={()=>{this.setState({
                  modal: !modal
                });}}>
                  <Icon name={'times'} size={20} color={'rgb(255,255,255)'} />
                </TouchableOpacity>
          </View>
        </Modal>

        <Header profile={profile} />
        <View style={styles.contentList}>
          <ContactsListView
            list={list}
            contacts={list}
            favoritos={favoritos}
            currentLocation={this.props.currentLocation}
            moreContacts={true}
            pictures={pictures}
            loading={loadingContacts}
            onLoadContacts={() => {
              this.loadContacts();
            }}
            isRefreshing={loadingContacts}
            setFavoritos={setFavoritos}
            deleteFavoritos={deleteFavoritos}
            onRefresh={() => {
              this.onRefresh();
            }}
            onPressedCell={rowData => {
              navigation.navigate('ContactDetails', rowData);
            }}
            specialSearch={
              this.state.specialSearch && this.state.isSearchingMode
            }
          />
        </View>
        <Loading loading={loading} />
        <TouchableOpacity style={styles.footer} onPress={()=>{this.setState({
          modal:!modal, 
        });}}>
          <View >
              
              <Text style={styles.textfooter}><IconFont name={'star'} size={15} color={'#fff'} /> Favoritos</Text>
            
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
