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
  const contacts = result.data.results.map(item => {
    return new Promise(resolve => {
      resolve({
        ...item,
      });
    });
  });
  Promise.all(contacts).then(response => {
    return dispatch({type: GET_PROFILE, payload: response[0]});
  });
};

export const getContacts = (page, results) => async dispatch => {
  const api = apisauce.create({
    baseURL: `https://randomuser.me/api/?page=${page}&results=${results}&seed=rdmusr`,
    headers: {
      Accept: 'application/json',
    },
    timeout: 20000,
  });

  const result = await api.get();
  const contacts = result.data.results.map(item => {
    return new Promise(resolve => {
      resolve({
        ...item,
      });
    });
  });

  const info = result.data.info;
  Promise.all(contacts).then(list => {
    return dispatch({type: GET_CONTACTS, payload: {list, info}});
  });
};
