import {createReducer} from '../Config';
import {SET_LOADING} from './Types';

const initialState = {
  loading: false,
};

const setLoading = (state = initialState, {payload}) => {
  return {
    ...state,
    loading: payload,
  };
};

const descriptor = {
  [SET_LOADING]: setLoading,
};

export default createReducer(initialState, descriptor);
