import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    // stlye prop can take an array, style most to the right will override styles on the left.
    // this allows us to take additional props/customize the component
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    position: 'relative',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1
  }
};

export { CardSection };
