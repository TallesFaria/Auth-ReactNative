import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCssNMay28rW9HsmYcSZqJnwdAPcZZC2dQ',
      authDomain: 'auth-ab394.firebaseapp.com',
      databaseURL: 'https://auth-ab394.firebaseio.com',
      projectId: 'auth-ab394',
      storageBucket: 'auth-ab394.appspot.com',
      messagingSenderId: '993301936186'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
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
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
};
