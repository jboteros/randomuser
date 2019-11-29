import {createReducer} from '../Config';
import {GET_CONTACTS, GET_PROFILE} from './Types';

const initialState = {
  list: [],
  info: {page: 1, results: 10, seed: 'randomuser', version: 1.3},
  profile: null,
};

const getContacts = (state = initialState, {payload}) => {
  console.log(' A', state.list);

  const {list, info} = payload;

  if (payload.info.page === 1) {
    return {
      ...state,
      list,
      info,
    };
  } else {
    console.log('concat C', state.list, list);
    let data = [...state.list, ...list];

    console.log('data D', data);
    return {
      ...state,
      list: data,
      info,
    };
  }
};

const getProfile = (state = initialState, {payload}) => {
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
