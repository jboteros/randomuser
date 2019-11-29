/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading} from '../../Core/UI/Actions';
import {getContacts, getProfile} from '../../Core/Contacts/Actions';

const mapStateToProps = ({ui, contacts}) => {
  const {loading} = ui;

  const {list, info, profile} = contacts;
  return {
    loading,
    list,
    info,
    profile,
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
