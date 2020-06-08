import NewPractice from '../../models/NewPractice';
import LoadedPractice from '../../models/LoadedPractice';
import ShotRegister from '../../models/ShotRegister';
import { ADD_SHOT, ADD_PRACTICE, SET_PRACTICES } from '../actions/practice';
import { Position, Result } from '../../constants/ShotParams';
import PracticeDetails from '../../models/PracticeDetails';
import { getSuccessRate } from '../../helpers/HelperFuntions';

const initialState = {
  practice: new NewPractice(
    Date.now(),
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
    0,
    0,
    0
  ),
  practiceDetails: new PracticeDetails(Date.now(), 0, 0, 0),
  shots: [],
  practices: [],
};

export default (state = initialState, action) => {
  // console.log('State shots: ' + JSON.stringify(state.shots));
  // console.log('Action: ' + JSON.stringify(action));
  // console.log('Practice: ' + JSON.stringify(state.practice));
  // console.log('Practices: ' + JSON.stringify(state.practices) + '\n');

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
          newState.practice.totalScore += 1;
          break;
        default:
          newState.practice.totalMisses += 1;
          break;
      }

      newState.practice.successRate = getSuccessRate(
        newState.practice.totalScore,
        newState.practice.totalMisses
      );

      switch (action.shot.result) {
        case Result.SCORE.value:
          position.score = position.score + 1;
          return newState;
        case Result.LEFT.value:
          position.left = position.left + 1;
          return newState;
        case Result.RIGHT.value:
          position.right = position.right + 1;
          return newState;
        case Result.SHORT.value:
          position.short = position.short + 1;
          return newState;
        case Result.LONG.value:
          position.long = position.long + 1;
          return newState;
      }
    case ADD_PRACTICE:
      const newPractice = new LoadedPractice(
        action.practice.id,
        action.practice.date,
        new ShotRegister(
          action.practice.crScore,
          action.practice.crLeft,
          action.practice.crRight,
          action.practice.crShort,
          action.practice.crLong
        ),
        new ShotRegister(
          action.practice.lbScore,
          action.practice.lbLeft,
          action.practice.lbRight,
          action.practice.lbShort,
          action.practice.lbLong
        ),
        new ShotRegister(
          action.practice.leScore,
          action.practice.leLeft,
          action.practice.leRight,
          action.practice.leShort,
          action.practice.leLong
        ),
        new ShotRegister(
          action.practice.ftScore,
          action.practice.ftLeft,
          action.practice.ftRight,
          action.practice.ftShort,
          action.practice.ftLong
        ),
        new ShotRegister(
          action.practice.reScore,
          action.practice.reLeft,
          action.practice.reRight,
          action.practice.reShort,
          action.practice.reLong
        ),
        new ShotRegister(
          action.practice.rbScore,
          action.practice.rbLeft,
          action.practice.rbRight,
          action.practice.rbShort,
          action.practice.rbLong
        ),
        new ShotRegister(
          action.practice.lcScore,
          action.practice.lcLeft,
          action.practice.lcRight,
          action.practice.lcShort,
          action.practice.lcLong
        ),
        new ShotRegister(
          action.practice.lwScore,
          action.practice.lwLeft,
          action.practice.lwRight,
          action.practice.lwShort,
          action.practice.lwLong
        ),
        new ShotRegister(
          action.practice.taScore,
          action.practice.taLeft,
          action.practice.taRight,
          action.practice.taShort,
          action.practice.taLong
        ),
        new ShotRegister(
          action.practice.rwScore,
          action.practice.rwLeft,
          action.practice.rwRight,
          action.practice.rwShort,
          action.practice.rwLong
        ),
        new ShotRegister(
          action.practice.rcScore,
          action.practice.rcLeft,
          action.practice.rcRight,
          action.practice.rcShort,
          action.practice.rcLong
        ),
        action.practice.totalScore,
        action.practice.totalMisses,
        action.practice.successRate
      );
      return {
        ...state,
        practice: initialState.practice,
        practices: [newPractice, ...state.practices],
      };
    case SET_PRACTICES:
      return {
        ...state,
        practices: action.practices
          .map(
            (pr) =>
              new LoadedPractice(
                pr.id.toString(),
                pr.date,
                new ShotRegister(
                  pr.crScore,
                  pr.crLeft,
                  pr.crRight,
                  pr.crShort,
                  pr.crLong
                ),
                new ShotRegister(
                  pr.lbScore,
                  pr.lbLeft,
                  pr.lbRight,
                  pr.lbShort,
                  pr.lbLong
                ),
                new ShotRegister(
                  pr.leScore,
                  pr.leLeft,
                  pr.leRight,
                  pr.leShort,
                  pr.leLong
                ),
                new ShotRegister(
                  pr.ftScore,
                  pr.ftLeft,
                  pr.ftRight,
                  pr.ftShort,
                  pr.ftLong
                ),
                new ShotRegister(
                  pr.reScore,
                  pr.reLeft,
                  pr.reRight,
                  pr.reShort,
                  pr.reLong
                ),
                new ShotRegister(
                  pr.rbScore,
                  pr.rbLeft,
                  pr.rbRight,
                  pr.rbShort,
                  pr.rbLong
                ),
                new ShotRegister(
                  pr.lcScore,
                  pr.lcLeft,
                  pr.lcRight,
                  pr.lcShort,
                  pr.lcLong
                ),
                new ShotRegister(
                  pr.lwScore,
                  pr.lwLeft,
                  pr.lwRight,
                  pr.lwShort,
                  pr.lwLong
                ),
                new ShotRegister(
                  pr.taScore,
                  pr.taLeft,
                  pr.taRight,
                  pr.taShort,
                  pr.taLong
                ),
                new ShotRegister(
                  pr.rwScore,
                  pr.rwLeft,
                  pr.rwRight,
                  pr.rwShort,
                  pr.rwLong
                ),
                new ShotRegister(
                  pr.rcScore,
                  pr.rcLeft,
                  pr.rcRight,
                  pr.rcShort,
                  pr.rcLong
                ),
                pr.totalScore,
                pr.totalMisses,
                pr.successRate
              )
          )
          .reverse(),
      };
    default:
      return state;
  }
};
