/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading} from '../../Core/UI/Actions';
import {getContacts, getProfile} from '../../Core/Contacts/Actions';
import {setFavoritos, deleteFavoritos} from '../../Core/Favoritos/Actions';

const mapStateToProps = ({ui, contacts, pics, fav}) => {
  const {loading} = ui;
  const {pictures} = pics;
  const {list, info, profile} = contacts;
  const {favoritos} = fav;
  return {
    loading,
    list,
    info,
    profile,
    pictures,
    favoritos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: state => dispatch(setLoading(state)),
    getContacts: (page, results) => dispatch(getContacts(page, results)),
    getProfile: () => dispatch(getProfile()),
    setFavoritos: state => dispatch(setFavoritos(state)),
    deleteFavoritos: state => dispatch(deleteFavoritos(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
