import React, { useEffect, useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as practiceActions from '../store/actions/practice';
import Colors from '../constants/Colors';
import PracticeListItem from '../components/PracticeListItem';

const StartScreen = (props) => {
  const [error, setError] = useState();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [practicesToDisplay, setPracticesToDisplay] = useState();
  const practices = useSelector((state) => state.practice.practices);
  const dispatch = useDispatch();

  // console.log(practices);

  const loadPractices = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);

    try {
      await dispatch(practiceActions.loadPractices());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadPractices().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadPractices]);

  // useEffect(() => {
  //   setPracticesToDisplay(practices.reverse());
  // }, [practices])

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <View style={{ marginTop: 15 }}>
          <Button
            title='Try again'
            onPress={loadPractices}
            color={Colors.primary}
          />
        </View>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={Colors.primary} />
      </View>
    );
  }

  const NoPractices = () => {
    return (
      <View style={styles.centered}>
        <Text>No practices recorded yet! Get shooting, pal!</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text>StartScreen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title='practise!'
          onPress={() => {
            props.navigation.navigate('Practice');
          }}
        />
      </View>
      {practices.length === 0 && !isLoading ? (
        <NoPractices />
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          onRefresh={loadPractices}
          refreshing={isRefreshing}
          data={practices}
          keyExtractor={(item) => (item.id ? item.id.toString() : item.date.toString())}
          renderItem={(itemData) => <PracticeListItem item={itemData} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonContainer: {
    padding: 10,
    marginBottom: 10,
  },
  list: { paddingVertical: 15 },
  centered: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartScreen;
