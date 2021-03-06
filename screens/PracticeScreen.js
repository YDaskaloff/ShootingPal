import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Picker, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { PositionsList } from '../constants/Position';
import { Result } from '../constants/ShotParams';
import CustomButton from '../components/CustomButton';
import * as practiceActions from '../store/actions/practice';
import Shot from '../models/Shot';
import HeaderButton from '../components/HeaderButton';

const PracticeScreen = (props) => {
  const backgroundImg = require('../assets/court.jpg');
  const dispatch = useDispatch();

  const curPractice = useSelector((state) => state.practice.practice);
  const [selectedPosition, setSelectedPosition] = useState(
    PositionsList[0].value
  );
  const [shots, setShots] = useState(0);

  let tableHead = ['SUCCESS', 'SCORE', 'MISSES'];
  // for (const item in PositionsList) {
  //   tableHead.push(PositionsList[item].label);
  // }
  const [tableData, setTableData] = useState([[0 + '%', 0, 0]]);

  const changePositionHandler = (item) => {
    setSelectedPosition(item);
  };

  const onShootHandler = useCallback(
    (result) => {
      setShots(shots + 1);
      const newShot = new Shot(selectedPosition, result);
      dispatch(practiceActions.addShot(newShot));
    },
    [dispatch, shots]
  );

  useEffect(() => {
    setTableData([[curPractice.successRate + '%', curPractice.totalScore, curPractice.totalMisses]]);
  }, [curPractice]);

  const saveHandler = useCallback(
    async (practice) => {
      try {
        await dispatch(practiceActions.addPractice(practice));
      } catch (err) {
        console.log(err);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    props.navigation.setParams({ practice: curPractice });
    props.navigation.setParams({ save: saveHandler });
  }, [curPractice]);

  return (
    <ImageBackground source={backgroundImg} style={styles.img}>
      <View style={styles.screen}>
        <View style={styles.pickers}>
          <View style={styles.pickerContainer}>
            <Text>Select position:</Text>
            <Picker
              mode='dropdown'
              style={styles.picker}
              selectedValue={selectedPosition}
              onValueChange={(itemValue) => changePositionHandler(itemValue)}
            >
              {PositionsList.map((item) => (
                <Picker.Item
                  label={item.label}
                  value={item.value}
                  key={item.value}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.buttonCentered}>
            <CustomButton
              title={Result.LONG.label}
              onShoot={() => {
                onShootHandler(Result.LONG.value);
              }}
            />
          </View>
          <View style={styles.threeButtons}>
            <CustomButton
              title={Result.LEFT.label}
              onShoot={() => {
                onShootHandler(Result.LEFT.value);
              }}
            />
            <CustomButton
              title={Result.SCORE.label}
              onShoot={() => {
                onShootHandler(Result.SCORE.value);
              }}
            />
            <CustomButton
              title={Result.RIGHT.label}
              onShoot={() => {
                onShootHandler(Result.RIGHT.value);
              }}
            />
          </View>
          <View style={styles.buttonCentered}>
            <CustomButton
              title={Result.SHORT.label}
              onShoot={() => {
                onShootHandler(Result.SHORT.value);
              }}
            />
          </View>
        </View>
        <View style={styles.tableContainer}>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.tableText}
            />
            <Rows data={tableData} textStyle={styles.tableText} />
          </Table>
        </View>
      </View>
    </ImageBackground>
  );
};

PracticeScreen.navigationOptions = (navData) => {
  const saveFn = navData.navigation.getParam('save');
  const practiceToForward = navData.navigation.getParam('practice');
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Add Place'
          iconName={Platform.OS === 'android' ? 'md-save' : 'ios-save'}
          onPress={() => {
            saveFn(practiceToForward);
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    width: '80%',
    alignItems: 'center',
  },
  pickers: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 8,
    elevation: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  pickerContainer: {
    width: '80%',
    alignItems: 'center',
  },
  picker: {
    width: '100%',
    height: 40,
  },
  buttonCentered: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 30,
  },
  threeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  tableContainer: {
    width: '100%',
    height: 200,
    padding: 16,
    paddingTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  tableText: { margin: 6 },
});

export default PracticeScreen;
