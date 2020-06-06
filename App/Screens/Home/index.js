/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading} from '../../Core/UI/Actions';
import {getContacts, getProfile} from '../../Core/Contacts/Actions';

const mapStateToProps = ({ui, contacts, pics, favorites}) => {
  const {loading} = ui;
  const {pictures} = pics;
  const {list, info, profile} = contacts;
  const { favoritesContactCells: favoritesCells } = favorites;

  return {
    loading,
    list,
    info,
    profile,
    pictures,
    favoritesCells
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: state => dispatch(setLoading(state)),
    getContacts: (page, results) => dispatch(getContacts(page, results)),
    getProfile: () => dispatch(getProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
