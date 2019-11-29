import {createReducer} from '../Config';
import {GET_CONTACTS, GET_PROFILE} from './Types';

const initialState = {
  list: [],
  info: {page: 1, results: 10, seed: 'randomuser', version: 1.3},
  profile: null,
};

const getContacts = (state = initialState, {payload}) => {
  console.log('reducer:getContacts', payload);
  return {
    ...state,
    list: payload,
  };
};

const getProfile = (state = initialState, {payload}) => {
  console.log('reducer:getContacts', payload);
  return {
    ...state,
    profile: payload,
  };
};

const descriptor = {
  [GET_CONTACTS]: getContacts,
  [GET_PROFILE]: getProfile,
};

export default createReducer(initialState, descriptor);
