import React from 'react'
import { Text, View, Modal } from 'react-native';

import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      // Android requires onRequestClose, passing empty function to satisfy request
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 40
  },
  containerStyle: {
    flex: 1,
    position: 'realtive',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, o.75)'
  }
};

export { Confirm };
