import AsyncStorage from '@react-native-community/async-storage';
import {GET_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE} from './Types';
export const getFavorites = () => async dispatch => {
  const data = await AsyncStorage.getItem('favorites');
  if (data) {
    return dispatch({type: GET_FAVORITES, payload: data});
  }
  return dispatch({type: GET_FAVORITES, payload: []});
};

export const saveFavorite = data => dispatch => {
  return dispatch({type: ADD_FAVORITE, payload: data});
};

export const deleteFavorite = data => dispatch => {
  dispatch({type: DELETE_FAVORITE, payload: data});
};
