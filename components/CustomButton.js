import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

import Colors from '../constants/Colors';
import { Result } from '../constants/ShotParams';

const CustomButton = (props) => {
  return (
    <View style={{...styles.container, ...{backgroundColor:
        props.title === Result.BANK
          ? Colors.bankShot
          : props.title === Result.SCORE
          ? Colors.success
          : Colors.primary,}}}>
      <TouchableNativeFeedback onPress={props.onShoot}>
        <View style={{ ...props.style, ...styles.button }}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
    borderRadius: 10,
    elevation: 5,
    minWidth: 70,
    borderColor: 'white',
    borderWidth: 3
  },
  button: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontWeight: "bold"
  },
});

export default CustomButton;
