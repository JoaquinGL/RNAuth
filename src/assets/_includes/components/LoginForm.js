/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React, { Component } from 'react';
import { Button, Card, CardSection , Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label= "Email: "
            placeholder = "user@gmail.com"
            value={this.state.email}
            onChangeText = { email => this.setState({ email }) }
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry // secureTextEntry = {true}
            label= "Password: "
            placeholder = "password"
            value={this.state.password}
            onChangeText = { password => this.setState({ password }) }
          />
        </CardSection>
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }

}

export default LoginForm;




