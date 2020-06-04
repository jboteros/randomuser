import {SET_FAVORITOS, DELETE_FAVORITOS} from './Types';

export const setFavoritos = state => dispatch => {
  dispatch({type: SET_FAVORITOS, payload: state});
};

export const deleteFavoritos = state => dispatch => {
  dispatch({type: DELETE_FAVORITOS, payload: state});
};
