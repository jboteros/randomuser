import {createReducer} from '../Config';
import {SET_PICTURES} from './Types';
import orderBy from 'lodash/orderBy';

const initialState = {
  pictures: [],
};

const setPictures = (state = initialState, {payload}) => {
  let data = [...state.pictures, payload];
  return {
    ...state,
    pictures: orderBy(data, 'timestamp', 'desc'),
  };
};

const descriptor = {
  [SET_PICTURES]: setPictures,
};

export default createReducer(initialState, descriptor);
