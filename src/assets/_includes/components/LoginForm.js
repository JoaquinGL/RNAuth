/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection , Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  renderButton() {

    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress= { this.onButtonPress.bind(this) }>
        Log in
      </Button>
    );

  }

  onButtonPress() {
    const {email, password } = this.state;
    this.setState({
      error: '',
      loading: true
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({
      error: '',
      email:'',
      password: '',
      loading: false
    });
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            label= "Email: "
            placeholder = "user@gmail.com"
            value= { this.state.email }
            onChangeText = { email => this.setState({ email }) }
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry // secureTextEntry = {true}
            label= "Password: "
            placeholder = "password"
            value= { this.state.password }
            onChangeText = { password => this.setState({ password }) }
          />
        </CardSection>

        <Text style= { styles.errorTextStyle }>
          { this.state.error }
        </Text>

        <CardSection>
          { this.renderButton() }
        </CardSection>

      </Card>
    );
  }

}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    padding: 5
  }

};


export default LoginForm;




