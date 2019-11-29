import {SET_LOADING} from './Types';

export const setLoading = state => dispatch => {
  dispatch({type: SET_LOADING, payload: state});
};
