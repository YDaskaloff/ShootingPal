import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import practiceReducer from './store/reducers/practice';
import BasketNavigator from './navigation/BasketNavigator';
import { init } from './helpers/db';

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch((err) => {
    console.log('Initializing db failed');
    console.log(err);
  });

const rootReducer = combineReducers({
  practice: practiceReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <BasketNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
