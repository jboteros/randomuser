import {createReducer} from '../Config';
import {GET_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE} from './Types';

const initialState = {
  list: [],
};

const getFavorites = (state = initialState, {payload}) => {
  let list = [...state.list, ...payload];
  return {
    ...state,
    list,
  };
};

const saveFavorite = (state = initialState, {payload}) => {
  let list = [...state.list, payload];
  return {
    ...state,
    list,
  };
};

const deleteFavorite = (state = initialState, {payload}) => {
  let copyList = [...state.list];
  const list = copyList.filter(data => data.login.uuid !== payload.login.uuid);
  return {
    ...state,
    list,
  };
};

const descriptor = {
  [GET_FAVORITES]: getFavorites,
  [ADD_FAVORITE]: saveFavorite,
  [DELETE_FAVORITE]: deleteFavorite,
};

export default createReducer(initialState, descriptor);
