import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const StartScreen = (props) => {
  return (
    <View>
      <Text>StartScreen</Text>
      <Button title='practise!' onPress={() => {props.navigation.navigate('Practice')}}/>

    </View>
  );
};

const styles = StyleSheet.create({});

export default StartScreen;
