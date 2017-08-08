import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
  apiKey: 'AIzaSyDIJRqqfQPFDgiV_hf4KDN5kouiARBcTLc',
  authDomain: 'manager-35859.firebaseapp.com',
  databaseURL: 'https://manager-35859.firebaseio.com',
  projectId: 'manager-35859',
  storageBucket: 'manager-35859.appspot.com',
  messagingSenderId: '92980269334'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;