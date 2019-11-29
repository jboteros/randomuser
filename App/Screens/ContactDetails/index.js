/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

const mapStateToProps = ({ui, contacts}) => {
  const {loading} = ui;

  const {profile} = contacts;
  return {
    loading,
    profile,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
