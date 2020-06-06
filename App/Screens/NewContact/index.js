/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading} from '../../Core/UI/Actions';
import {setPictures} from '../../Core/Pictures/Actions';

const mapStateToProps = ({ui, contacts, pics}) => {
  const {loading} = ui;
  const {pictures} = pics;
  const {profile} = contacts;
  return {
    loading,
    profile,
    pictures,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: state => dispatch(setLoading(state)),
    setPictures: data => dispatch(setPictures(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
