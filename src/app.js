import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import { firebaseSetup } from '../SECRETS.js';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCJ7qEcxe9eiqksf0MG7thiKySvv4xn-T0',
      authDomain: 'auth-37ab9.firebaseapp.com',
      databaseURL: 'https://auth-37ab9.firebaseio.com',
      projectId: 'auth-37ab9',
      storageBucket: 'auth-37ab9.appspot.com',
      messagingSenderId: '3141029957'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;

    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
