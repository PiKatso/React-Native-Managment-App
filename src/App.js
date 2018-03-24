import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

// import combinedReducers
import reducers from './reducers';
import LoginForm from './components/LoginForm';
// import firebase config variables
import { REACT_NATIVE_Config } from '../config.env';

// create root component
class App extends Component {
  // add life cycle method componentWillMount to initialize firebase
  componentWillMount() {
    firebase.initializeApp(REACT_NATIVE_Config);
  }
  
  render () {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
