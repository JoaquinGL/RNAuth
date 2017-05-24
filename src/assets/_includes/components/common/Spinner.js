// Import libraries for making a component
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// Make a component
const Spinner = ({size}) => {
  return (
    <View style={ styles.spinnerStyle }>
      <ActivityIndicator size= { size || 'large' } />
    </View>
  );
};

const styles = {

  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

};

export { Spinner };

// Make the component available to other parts of the app
// export default Button;
// export {Button: Button};
// (props) -> ( { album} ) -> when you have multiple references to props object

/*<ActivityIndicator size={large/small}/>*/
