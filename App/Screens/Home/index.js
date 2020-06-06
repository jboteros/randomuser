/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading} from '../../Core/UI/Actions';
import {getContacts, getProfile} from '../../Core/Contacts/Actions';
import {getFavorites, saveFavorite} from '../../Core/Favorites/Actions';

const mapStateToProps = ({ui, contacts, pics}) => {
  const {loading} = ui;
  const {pictures} = pics;
  const {list, info, profile} = contacts;
  return {
    loading,
    list,
    info,
    profile,
    pictures,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: state => dispatch(setLoading(state)),
    getContacts: (page, results) => dispatch(getContacts(page, results)),
    getProfile: () => dispatch(getProfile()),
    getFavorites: () => dispatch(getFavorites()),
    saveFavorite: (data) => dispatch(saveFavorite(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
