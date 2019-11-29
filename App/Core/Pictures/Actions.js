import {SET_PICTURES} from './Types';

export const setPictures = data => dispatch => {
  dispatch({type: SET_PICTURES, payload: data});
};
