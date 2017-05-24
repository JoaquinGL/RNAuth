/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

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


    firebase.auth().onAuthStateChanged((user) =>{
      // user is null when he is log out
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {

    switch (this.state.loggedIn){
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress= {() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return ( <LoginForm />);
      default:
        return (
          <View style={ styles.spinnerViewStyles }>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }

}

const styles = {
  spinnerViewStyles: {
    padding: 40
  }
};

export default App;




