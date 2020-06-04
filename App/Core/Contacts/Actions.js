import {GET_CONTACTS, GET_PROFILE} from './Types';
import apisauce from 'apisauce';

export const getProfile = () => async dispatch => {
  const api = apisauce.create({
    baseURL: 'https://randomuser.me/api/?seed=prof',
    headers: {
      Accept: 'application/json',
    },
    timeout: 20000,
  });

  const result = await api.get();
  dispatch({type: GET_PROFILE, payload: result.data.results[0]});
};

export const getContacts = (page, results) => async dispatch => {
  const api = apisauce.create({
    baseURL: `https://randomuser.me/api/?page=${page}&results=${results}&nat=us&seed=rdmusr`,
    headers: {
      Accept: 'application/json',
    },
    timeout: 20000,
  });

  const result = await api.get();

  const info = result.data.info;
  const list = result.data.results
  dispatch({type: GET_CONTACTS, payload: {list, info}});
};
