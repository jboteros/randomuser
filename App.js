import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './App/Core';
import Router from './App/Config/Router';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar
            animated
            backgroundColor="#F43556"
            barStyle="light-content"
          />
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}
