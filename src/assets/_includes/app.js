/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  //lifecycle methods
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAw7reOCN1bYIEHzBo61j9v0ZugBJdIDT8',
      authDomain: 'auth-9c4de.firebaseapp.com',
      databaseURL: 'https://auth-9c4de.firebaseio.com',
      projectId: 'auth-9c4de',
      storageBucket: 'auth-9c4de.appspot.com',
      messagingSenderId: '78875705504',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }

}

export default App;




