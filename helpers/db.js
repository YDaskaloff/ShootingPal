import * as SQLite from 'expo-sqlite';

import { Result, Position } from '../constants/ShotParams';

const db = SQLite.openDatabase('practice.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS closeRange (
              id INTEGER PRIMARY KEY NOT NULL, date DATE NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL
              );`,
        [
          Result.BANK.value,
          Result.LEFT.value,
          Result.LONG.value,
          Result.RIGHT.value,
          Result.SCORE.value,
          Result.SHORT.value,
        ],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS leftBlock (
              id INTEGER PRIMARY KEY NOT NULL, date DATE NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL
              );`,
        [
          Result.BANK.value,
          Result.LEFT.value,
          Result.LONG.value,
          Result.RIGHT.value,
          Result.SCORE.value,
          Result.SHORT.value,
        ],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS leftElbow (
              id INTEGER PRIMARY KEY NOT NULL, date DATE NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL
              );`,
        [
          Result.BANK.value,
          Result.LEFT.value,
          Result.LONG.value,
          Result.RIGHT.value,
          Result.SCORE.value,
          Result.SHORT.value,
        ],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS freeThrow (
              id INTEGER PRIMARY KEY NOT NULL, date DATE NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL
              );`,
        [
          Result.BANK.value,
          Result.LEFT.value,
          Result.LONG.value,
          Result.RIGHT.value,
          Result.SCORE.value,
          Result.SHORT.value,
        ],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS rightElbow (
              id INTEGER PRIMARY KEY NOT NULL, date DATE NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL
              );`,
        [
          Result.BANK.value,
          Result.LEFT.value,
          Result.LONG.value,
          Result.RIGHT.value,
          Result.SCORE.value,
          Result.SHORT.value,
        ],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS rightBlock (
              id INTEGER PRIMARY KEY NOT NULL, date DATE NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL
              );`,
        [
          Result.BANK.value,
          Result.LEFT.value,
          Result.LONG.value,
          Result.RIGHT.value,
          Result.SCORE.value,
          Result.SHORT.value,
        ],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS leftCorner (
              id INTEGER PRIMARY KEY NOT NULL, date DATE NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL
              );`,
        [
          Result.BANK.value,
          Result.LEFT.value,
          Result.LONG.value,
          Result.RIGHT.value,
          Result.SCORE.value,
          Result.SHORT.value,
        ],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS leftWing (
              id INTEGER PRIMARY KEY NOT NULL, date DATE NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL
              );`,
        [
          Result.BANK.value,
          Result.LEFT.value,
          Result.LONG.value,
          Result.RIGHT.value,
          Result.SCORE.value,
          Result.SHORT.value,
        ],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS topOfTheArc (
              id INTEGER PRIMARY KEY NOT NULL, date DATE NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL
              );`,
        [
          Result.BANK.value,
          Result.LEFT.value,
          Result.LONG.value,
          Result.RIGHT.value,
          Result.SCORE.value,
          Result.SHORT.value,
        ],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS rightWing (
              id INTEGER PRIMARY KEY NOT NULL, date DATE NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL
              );`,
        [
          Result.BANK.value,
          Result.LEFT.value,
          Result.LONG.value,
          Result.RIGHT.value,
          Result.SCORE.value,
          Result.SHORT.value,
        ],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS rightCorner (
              id INTEGER PRIMARY KEY NOT NULL, date DATE NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL, 
                ? INTEGER NOT NULL, ? INTEGER NOT NULL, ? INTEGER NOT NULL
              );`,
        [
          Result.BANK.value,
          Result.LEFT.value,
          Result.LONG.value,
          Result.RIGHT.value,
          Result.SCORE.value,
          Result.SHORT.value,
        ],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
    return promise;
  });
};

export const addShot = (position, result) => {
  let tableName;
  switch (position) {
    case Position.CR:
      tableName = 'closeRange';
      break;
    case Position.LB:
      tableName = 'leftBlock';
      break;
    case Position.LE:
      tableName = 'leftElbow';
      break;
    case Position.FT:
      tableName = 'freeThrow';
      break;
    case Position.RE:
      tableName = 'rightElbow';
      break;
    case Position.RB:
      tableName = 'rightBlock';
      break;
    case Position.LC:
      tableName = 'leftCorner';
      break;
    case Position.LW:
      tableName = 'leftWing';
      break;
    case Position.TA:
      tableName = 'topOfTheArc';
      break;
    case Position.RW:
      tableName = 'rightWing';
      break;
    case Position.RC:
      tableName = 'rightCorner';
      break;
    default:
      break;
  }

  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE ` + tableName + ` SET ` + result + ` = ` + result + ` + 1`,
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const startPractice = () => {
  const expiryTime = new Date(Date.now() + 6 * 60 * 60 * 1000);

  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO closeRange (date) VALUES (?)`,
        [expiryTime],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `INSERT INTO leftBlock (date) VALUES (?)`,
        [expiryTime],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `INSERT INTO leftElbow (date) VALUES (?)`,
        [expiryTime],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `INSERT INTO freeThrow (date) VALUES (?)`,
        [expiryTime],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `INSERT INTO rightElbow (date) VALUES (?)`,
        [expiryTime],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `INSERT INTO rightBlock (date) VALUES (?)`,
        [expiryTime],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `INSERT INTO leftCorner (date) VALUES (?)`,
        [expiryTime],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `INSERT INTO leftWing (date) VALUES (?)`,
        [expiryTime],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `INSERT INTO topOfTheArc (date) VALUES (?)`,
        [expiryTime],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `INSERT INTO rightWing (date) VALUES (?)`,
        [expiryTime],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        `INSERT INTO rightCorner (date) VALUES (?)`,
        [expiryTime],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};