/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading} from '../../Core/UI/Actions';
import {setPictures} from '../../Core/Pictures/Actions';
import { addContactCells, removeContactCell } from '../../Core/Favorites/Actions'

const mapStateToProps = ({ui, contacts, pics, favorites}) => {
  const {loading} = ui;
  const {pictures} = pics;
  const {profile} = contacts;
  const { favoritesContactCells: favoritesCells } = favorites;

  return {
    loading,
    profile,
    pictures,
    favoritesCells
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: state => dispatch(setLoading(state)),
    setPictures: data => dispatch(setPictures(data)),
    setAsFavorite: cell => dispatch(addContactCells(cell)),
    removeAsFavorite: cell => dispatch(removeContactCell(cell))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
