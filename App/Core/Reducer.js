import {combineReducers} from 'redux';

import UI from './UI/Reducer';
import Contacts from './Contacts/Reducer';
import Pictures from './Pictures/Reducer';
import Favoritos from './Favoritos/Reducer';
export default () =>
  combineReducers({
    ui: UI,
    contacts: Contacts,
    pics: Pictures,
    fav: Favoritos,
  });
