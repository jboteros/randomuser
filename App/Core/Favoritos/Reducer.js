import {createReducer} from '../Config';
import {SET_FAVORITOS, DELETE_FAVORITOS} from './Types';

const initialState = {
  favoritos: [],
};

const setFavoritos = (state = initialState, {payload}) => {
  let data = [...state.favoritos, payload];
  return {
    ...state,
    favoritos: data,
  };
};

const deleteFavoritos = (state = initialState, {payload}) =>{
	let data = [...state.favoritos];
	var i = data.indexOf( payload );
    i !== -1 && data.splice( i, 1 );

	return {
		...state,
		favoritos: data,
	}
}

const descriptor = {
  [SET_FAVORITOS]: setFavoritos,
  [DELETE_FAVORITOS]: deleteFavoritos,
};

export default createReducer(initialState, descriptor);
