import Practice from '../../models/Practice';
import ShotRegister from '../../models/shotRegister';
import { ADD_SHOT } from '../actions/practice';
import { Position, Result } from '../../constants/ShotParams';

const initialState = {
  practice: new Practice(
    new ShotRegister(0, 0, 0, 0, 0),   
    new ShotRegister(0, 0, 0, 0, 0),   
    new ShotRegister(0, 0, 0, 0, 0),   
    new ShotRegister(0, 0, 0, 0, 0),   
    new ShotRegister(0, 0, 0, 0, 0),   
    new ShotRegister(0, 0, 0, 0, 0),   
    new ShotRegister(0, 0, 0, 0, 0),   
    new ShotRegister(0, 0, 0, 0, 0),   
    new ShotRegister(0, 0, 0, 0, 0),   
    new ShotRegister(0, 0, 0, 0, 0),   
    new ShotRegister(0, 0, 0, 0, 0),
  ),
  shots: [],
};

export default (state = initialState, action) => {
  // console.log('State shots: ' + JSON.stringify(state.shots));
  // console.log('Action: ' + JSON.stringify(action));
  // console.log('Practice: ' + JSON.stringify(state.practice));
  // console.log(
  //   'Close range: ' + JSON.stringify(state.practice.cr) + '\n'
  // );
  
  switch (action.type) {
    case ADD_SHOT:
      let position;

      let newState = {
        ...state,
        practice: {
          ...state.practice,
        },
      };

      switch (action.shot.position) {
        // CLOSE RANGE:
        case Position.CR:
          newState.practice.cr = {
            ...state.practice.cr,
          };
          position = newState.practice.cr;
          break;
        // LEFT BLOCK:
        case Position.LB:
          newState.practice.lb = {
            ...state.practice.lb,
          };
          position = newState.practice.lb;
          break;
        // LEFT ELBOW:
        case Position.LE:
          newState.practice.le = {
            ...state.practice.le,
          };
          position = newState.practice.le;
          break;
        // FREE THROW:
        case Position.FT:
          newState.practice.ft = {
            ...state.practice.ft,
          };
          position = newState.practice.ft;
          break;
        // RIGHT ELBOW:
        case Position.RE:
          newState.practice.re = {
            ...state.practice.re,
          };
          position = newState.practice.re;
          break;
        // RIGHT BLOCK:
        case Position.RB:
          newState.practice.rb = {
            ...state.practice.rb,
          };
          position = newState.practice.rb;
          break;
        // LEFT CORNER:
        case Position.LC:
          newState.practice.lc = {
            ...state.practice.lc,
          };
          position = newState.practice.lc;
          break;
        // LEFT WING:
        case Position.LW:
          newState.practice.lw = {
            ...state.practice.lw,
          };
          position = newState.practice.lw;
          break;
        // TOP OF THE ARC:
        case Position.TA:
          newState.practice.ta = {
            ...state.practice.ta,
          };
          position = newState.practice.ta;
          break;
        // RIGHT WING:
        case Position.RW:
          newState.practice.rw = {
            ...state.practice.rw,
          };
          position = newState.practice.rw;
          break;
        // RIGHT CORNER:
        case Position.RC:
          newState.practice.rc = {
            ...state.practice.rc,
          };
          position = newState.practice.rc;
          break;
      }

      switch (action.shot.result) {
        case Result.SCORE.value:
          position.score = position.score + 1;
          return newState;
        case Result.LONG.value:
          position.long = position.long + 1;
          return newState;
        case Result.SHORT.value:
          position.short = position.short + 1;
          return newState;
        case Result.LEFT.value:
          position.left = position.left + 1;
          return newState;
        case Result.RIGHT.value:
          position.right = position.right + 1;
          return newState;
      }

    default:
      return state;
  }
};