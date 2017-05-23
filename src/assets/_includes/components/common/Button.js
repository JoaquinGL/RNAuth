// Import libraries for making a component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Make a component
const Button = ({ onPress, children }) => {

  const { buttonStyle, textStyle } = styles;

  return(
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text  style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};


const styles = {
  buttonStyle: {
    flex: 1, // allows to expand all the size
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#007aff',
    borderWidth: .5,
    marginLeft: 5,
    marginRight: 5,
  },

  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },

};

export { Button };

// Make the component available to other parts of the app
// export default Button;
// export {Button: Button};
// (props) -> ( { album} ) -> when you have multiple references to props object
