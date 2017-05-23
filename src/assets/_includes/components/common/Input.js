/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const {
    inputStyle,
    labelStyle,
    containerStyle,
  } = styles;

  return (
    <View style= { containerStyle }>
      <Text style= { labelStyle }>{ label }</Text>
      <TextInput
        secureTextEntry = { secureTextEntry }
        placeholder = { placeholder }
        autoCorrect = { false }
        value = { value }
        onChangeText = { onChangeText }
        style={ inputStyle }
      />
    </View>
  );
};

const styles = {

  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2, // proportion of values of flex. 2/3 allocated into the view
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 0,
    textAlign: 'right',
    flex: 1, // 1/3 allocated into the view
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { Input };




