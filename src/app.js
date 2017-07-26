import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCJ7qEcxe9eiqksf0MG7thiKySvv4xn-T0',
      authDomain: 'auth-37ab9.firebaseapp.com',
      databaseURL: 'https://auth-37ab9.firebaseio.com',
      projectId: 'auth-37ab9',
      storageBucket: 'auth-37ab9.appspot.com',
      messagingSenderId: '3141029957'
    })
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
