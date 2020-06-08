import { savePractice, fetchPractices } from '../../helpers/db';

export const ADD_SHOT = "ADD_SHOT";
export const UNDO = "UNDO";
export const ADD_PRACTICE = "ADD_PRACTICE";
export const SET_PRACTICES = "SET_PRACTICES";

export const addPractice = (practice) => {
  return async (dispatch) => {
    try {
      const dbResult = await savePractice(practice);
      // console.log('DBRESULT: ' + JSON.stringify(dbResult.rows._array));
      dispatch({ type: ADD_PRACTICE, practice: practice });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export const loadPractices = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPractices();
      // console.log(dbResult);
      dispatch({ type: SET_PRACTICES, practices: dbResult.rows._array });
    } catch (err) {
      console.log('Fetching practices error: ' + err);
      throw err;
    }
  };
}

export const addShot = (shot) => {
  return { type: ADD_SHOT, shot: shot };
};

export const undo = () => {
  return { type: UNDO };
};
