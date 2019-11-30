import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../App/Components/Header';

export default function Button({onPress}) {
  return <Header onPress={onPress} />;
}

Header.defaultProps = {
  onPress: () => {},
};

Header.propTypes = {
  onPress: PropTypes.func,
};
