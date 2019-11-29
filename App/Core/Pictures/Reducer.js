import {createReducer} from '../Config';
import {SET_PICTURES} from './Types';
import R from 'lodash';

const initialState = {
  pictures: [],
};

const setPictures = (state = initialState, {payload}) => {
  let data = [...state.pictures, payload];
  return {
    ...state,
    pictures: R.orderBy(data, 'timestamp', 'desc'),
  };
};

const descriptor = {
  [SET_PICTURES]: setPictures,
};

export default createReducer(initialState, descriptor);
