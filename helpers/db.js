import * as SQLite from 'expo-sqlite';

import * as dbValues from '../constants/dbValues';

const db = SQLite.openDatabase('practice.db');

export const init = () => {
  const columns = createColumns(' INTEGER NOT NULL');
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS practices (id INTEGER PRIMARY KEY NOT NULL, date DATE NOT NULL, ${columns}, totalScore, totalMisses, successRate);`,
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

// export const init = () => {
//   const columns = createColumns('INTEGER NOT NULL');
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         `DROP TABLE IF EXISTS practices;`,
//         [],
//         () => {
//           resolve();
//         },
//         (_, err) => {
//           reject(err);
//         }
//       );
//     });
//   });
//   return promise;
// };

export const savePractice = (practice) => {
  const columns = createColumns('');
  
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO practices (date, ${columns}, totalScore, totalMisses, successRate)  
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
                ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
        [
          practice.date,
          practice.cr.score,
          practice.cr.left,
          practice.cr.right,
          practice.cr.short,
          practice.cr.long,
          practice.lb.score,
          practice.lb.left,
          practice.lb.right,
          practice.lb.short,
          practice.lb.long,
          practice.le.score,
          practice.le.left,
          practice.le.right,
          practice.le.short,
          practice.le.long,
          practice.ft.score,
          practice.ft.left,
          practice.ft.right,
          practice.ft.short,
          practice.ft.long,
          practice.re.score,
          practice.re.left,
          practice.re.right,
          practice.re.short,
          practice.re.long,
          practice.rb.score,
          practice.rb.left,
          practice.rb.right,
          practice.rb.short,
          practice.rb.long,
          practice.lc.score,
          practice.lc.left,
          practice.lc.right,
          practice.lc.short,
          practice.lc.long,
          practice.lw.score,
          practice.lw.left,
          practice.lw.right,
          practice.lw.short,
          practice.lw.long,
          practice.ta.score,
          practice.ta.left,
          practice.ta.right,
          practice.ta.short,
          practice.ta.long,
          practice.rw.score,
          practice.rw.left,
          practice.rw.right,
          practice.rw.short,
          practice.rw.long,
          practice.rc.score,
          practice.rc.left,
          practice.rc.right,
          practice.rc.short,
          practice.rc.long,
          practice.totalScore,
          practice.totalMisses,
          practice.successRate
        ],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchPractices = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM practices;',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

const createColumns = (addition) => {
  let columns = '';
  for (let i = 0; i < dbValues.positions.length; i++) {
    for (let j = 0; j < dbValues.results.length; j++) {
      if (
        i === dbValues.positions.length - 1 &&
        j === dbValues.results.length - 1
      ) {
        columns += dbValues.positions[i] + dbValues.results[j] + ' ' + addition;
      } else {
        columns +=
          dbValues.positions[i] + dbValues.results[j] + addition + ', ';
      }
    }
  }

  return columns;
};
