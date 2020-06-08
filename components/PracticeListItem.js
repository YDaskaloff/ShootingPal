import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { useSelector } from 'react-redux';

import ListItemDetails from './ListItemDetails';

const PracticeListItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [chartData, setChartData] = useState([]);
  const practice = props.item.item;
  // console.log(practice.totalScore);

  const totalScore = practice.totalScore;
  const totalMisses = practice.totalMisses;
  const successRate = practice.successRate;
  //   console.log('Practice: ' + JSON.stringify(item));

  const getData = () => {
    let data = [0, 0, 0, 0, 0];
    for (var key in practice) {
      if (
        practice.hasOwnProperty(key) &&
        key !== 'date' &&
        key !== 'id' &&
        key !== 'totalScore' &&
        key !== 'totalMisses' &&
        key !== 'successRate'
      ) {
        data[0] += practice[key].score;
        data[1] += practice[key].long;
        data[2] += practice[key].short;
        data[3] += practice[key].left;
        data[4] += practice[key].right;
      }
    }

    return data;
  };

  const showDetailsHandler = () => {
    if (!showDetails) {
      const data = getData();
      setChartData(data);
    } else {
      setChartData([]);
    }
    setShowDetails(!showDetails);
  };

  return (
    <TouchableNativeFeedback onPress={showDetailsHandler}>
      <View style={{ height: showDetails ? 320 : 80, ...styles.card }}>
        <Text>{practice.readableDate}</Text>
        <View style={styles.details}>
          <Text>Success: {successRate}%</Text>
          <Text>Score: {totalScore}</Text>
          <Text>Misses: {totalMisses}</Text>
        </View>
        {showDetails && (
          <View style={styles.charts}>
            <ListItemDetails data={chartData} />
          </View>
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  details: {
    width: '80%',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  charts: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PracticeListItem;
