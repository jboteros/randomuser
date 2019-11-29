import {combineReducers} from 'redux';

import UI from './UI/Reducer';
import Contacts from './Contacts/Reducer';

export default () =>
  combineReducers({
    ui: UI,
    contacts: Contacts,
  });
