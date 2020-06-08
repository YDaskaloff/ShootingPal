import Practice from '../../models/Practice';
import ShotRegister from '../../models/shotRegister';
import { ADD_SHOT } from '../actions/practice';
import { Position, Result } from '../../constants/ShotParams';

const initialState = {
  practice: new Practice(
    new ShotRegister(0, 0, 0, 0, 0, 0),
    new ShotRegister(0, 0, 0, 0, 0, 0),
    new ShotRegister(0, 0, 0, 0, 0, 0),
    new ShotRegister(0, 0, 0, 0, 0, 0),
    new ShotRegister(0, 0, 0, 0, 0, 0),
    new ShotRegister(0, 0, 0, 0, 0, 0),
    new ShotRegister(0, 0, 0, 0, 0, 0),
    new ShotRegister(0, 0, 0, 0, 0, 0),
    new ShotRegister(0, 0, 0, 0, 0, 0),
    new ShotRegister(0, 0, 0, 0, 0, 0),
    new ShotRegister(0, 0, 0, 0, 0, 0)
  ),
  shots: [],
};

export default (state = initialState, action) => {
  // console.log('State shots: ' + JSON.stringify(state.shots));
  // console.log('Action: ' + JSON.stringify(action));
  // console.log('Practice: ' + JSON.stringify(state.practice));
  // console.log(
  //   'Close range: ' + JSON.stringify(state.curPractice.closeRange) + '\n'
  // );
  switch (action.type) {
    case ADD_SHOT:
      switch (action.shot.position) {
        // CLOSE RANGE:
        case Position.CR:
          switch (action.shot.result) {
            case Result.BANK.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  cr: {
                    ...state.practice.cr,
                    bank: state.practice.cr.bank + 1,
                  },
                },
              };
            case Result.LONG.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  cr: {
                    ...state.practice.cr,
                    score: state.practice.cr.long + 1,
                  },
                },
              };
            case Result.LEFT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  cr: {
                    ...state.practice.cr,
                    short: state.practice.cr.left + 1,
                  },
                },
              };
            case Result.RIGHT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  cr: {
                    ...state.practice.cr,
                    left: state.practice.cr.right + 1,
                  },
                },
              };
            case Result.LONG.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  cr: {
                    ...state.practice.cr,
                    right: state.practice.cr.long + 1,
                  },
                },
              };
            case Result.SHORT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  cr: {
                    ...state.practice.cr,
                    long: state.practice.cr.short + 1,
                  },
                },
              };
            case Result.SCORE.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  cr: {
                    ...state.practice.cr,
                    short: state.practice.cr.score + 1,
                  },
                },
              };
          }
        // LEFT BLOCK:
        case Position.LB:
          switch (action.shot.result) {
            case Result.BANK.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lb: {
                    ...state.practice.lb,
                    bank: state.practice.lb.bank + 1,
                  },
                },
              };
            case Result.SCORE.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lb: {
                    ...state.practice.lb,
                    score: state.practice.lb.score + 1,
                  },
                },
              };
            case Result.SHORT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lb: {
                    ...state.practice.lb,
                    short: state.practice.lb.short + 1,
                  },
                },
              };
            case Result.LEFT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lb: {
                    ...state.practice.lb,
                    left: state.practice.lb.left + 1,
                  },
                },
              };
            case Result.RIGHT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lb: {
                    ...state.practice.lb,
                    right: state.practice.lb.right + 1,
                  },
                },
              };
            case Result.LONG.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lb: {
                    ...state.practice.lb,
                    long: state.practice.lb.long + 1,
                  },
                },
              };
          }
        // LEFT ELBOW:
        case Position.LE:
          switch (action.shot.result) {
            case Result.BANK.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  le: {
                    ...state.practice.le,
                    bank: state.practice.le.bank + 1,
                  },
                },
              };
            case Result.SCORE.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  le: {
                    ...state.practice.le,
                    score: state.practice.le.score + 1,
                  },
                },
              };
            case Result.SHORT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  le: {
                    ...state.practice.le,
                    short: state.practice.le.short + 1,
                  },
                },
              };
            case Result.LEFT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  le: {
                    ...state.practice.le,
                    left: state.practice.le.left + 1,
                  },
                },
              };
            case Result.RIGHT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  le: {
                    ...state.practice.le,
                    right: state.practice.le.right + 1,
                  },
                },
              };
            case Result.LONG.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  le: {
                    ...state.practice.le,
                    long: state.practice.le.long + 1,
                  },
                },
              };
          }
        // FREE THROW:
        case Position.FT:
          switch (action.shot.result) {
            case Result.BANK.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  ft: {
                    ...state.practice.ft,
                    bank: state.practice.ft.bank + 1,
                  },
                },
              };
            case Result.SCORE.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  ft: {
                    ...state.practice.ft,
                    score: state.practice.ft.score + 1,
                  },
                },
              };
            case Result.SHORT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  ft: {
                    ...state.practice.ft,
                    short: state.practice.ft.short + 1,
                  },
                },
              };
            case Result.LEFT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  ft: {
                    ...state.practice.ft,
                    left: state.practice.ft.left + 1,
                  },
                },
              };
            case Result.RIGHT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  ft: {
                    ...state.practice.ft,
                    right: state.practice.ft.right + 1,
                  },
                },
              };
            case Result.LONG.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  ft: {
                    ...state.practice.ft,
                    long: state.practice.ft.long + 1,
                  },
                },
              };
          }
        // RIGHT ELBOW:
        case Position.RE:
          switch (action.shot.result) {
            case Result.BANK.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  re: {
                    ...state.practice.re,
                    bank: state.practice.re.bank + 1,
                  },
                },
              };
            case Result.SCORE.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  re: {
                    ...state.practice.re,
                    score: state.practice.re.score + 1,
                  },
                },
              };
            case Result.SHORT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  re: {
                    ...state.practice.re,
                    short: state.practice.re.short + 1,
                  },
                },
              };
            case Result.LEFT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  re: {
                    ...state.practice.re,
                    left: state.practice.re.left + 1,
                  },
                },
              };
            case Result.RIGHT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  re: {
                    ...state.practice.re,
                    right: state.practice.re.right + 1,
                  },
                },
              };
            case Result.LONG.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  re: {
                    ...state.practice.re,
                    long: state.practice.re.long + 1,
                  },
                },
              };
          }
        // RIGHT BLOCK:
        case Position.RB:
          switch (action.shot.result) {
            case Result.BANK.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rb: {
                    ...state.practice.rb,
                    bank: state.practice.rb.bank + 1,
                  },
                },
              };
            case Result.SCORE.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rb: {
                    ...state.practice.rb,
                    score: state.practice.rb.score + 1,
                  },
                },
              };
            case Result.SHORT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rb: {
                    ...state.practice.rb,
                    short: state.practice.rb.short + 1,
                  },
                },
              };
            case Result.LEFT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rb: {
                    ...state.practice.rb,
                    left: state.practice.rb.left + 1,
                  },
                },
              };
            case Result.RIGHT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rb: {
                    ...state.practice.rb,
                    right: state.practice.rb.right + 1,
                  },
                },
              };
            case Result.LONG.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rb: {
                    ...state.practice.rb,
                    long: state.practice.rb.long + 1,
                  },
                },
              };
          }
        // LEFT CORNER:
        case Position.LC:
          switch (action.shot.result) {
            case Result.BANK.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lc: {
                    ...state.practice.lc,
                    bank: state.practice.lc.bank + 1,
                  },
                },
              };
            case Result.SCORE.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lc: {
                    ...state.practice.lc,
                    score: state.practice.lc.score + 1,
                  },
                },
              };
            case Result.SHORT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lc: {
                    ...state.practice.lc,
                    short: state.practice.lc.short + 1,
                  },
                },
              };
            case Result.LEFT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lc: {
                    ...state.practice.lc,
                    left: state.practice.lc.left + 1,
                  },
                },
              };
            case Result.RIGHT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lc: {
                    ...state.practice.lc,
                    right: state.practice.lc.right + 1,
                  },
                },
              };
            case Result.LONG.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lc: {
                    ...state.practice.lc,
                    long: state.practice.lc.long + 1,
                  },
                },
              };
          }
        // LEFT WING:
        case Position.LW:
          switch (action.shot.result) {
            case Result.BANK.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lw: {
                    ...state.practice.lw,
                    bank: state.practice.lw.bank + 1,
                  },
                },
              };
            case Result.SCORE.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lw: {
                    ...state.practice.lw,
                    score: state.practice.lw.score + 1,
                  },
                },
              };
            case Result.SHORT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lw: {
                    ...state.practice.lw,
                    short: state.practice.lw.short + 1,
                  },
                },
              };
            case Result.LEFT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lw: {
                    ...state.practice.lw,
                    lelw: state.practice.lw.lelw + 1,
                  },
                },
              };
            case Result.RIGHT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lw: {
                    ...state.practice.lw,
                    right: state.practice.lw.right + 1,
                  },
                },
              };
            case Result.LONG.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  lw: {
                    ...state.practice.lw,
                    long: state.practice.lw.long + 1,
                  },
                },
              };
          }
        // TOP OF THE ARC:
        case Position.TA:
          switch (action.shot.result) {
            case Result.BANK.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  ta: {
                    ...state.practice.ta,
                    bank: state.practice.ta.bank + 1,
                  },
                },
              };
            case Result.SCORE.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  ta: {
                    ...state.practice.ta,
                    score: state.practice.ta.score + 1,
                  },
                },
              };
            case Result.SHORT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  ta: {
                    ...state.practice.ta,
                    short: state.practice.ta.short + 1,
                  },
                },
              };
            case Result.LEFT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  ta: {
                    ...state.practice.ta,
                    left: state.practice.ta.left + 1,
                  },
                },
              };
            case Result.RIGHT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  ta: {
                    ...state.practice.ta,
                    right: state.practice.ta.right + 1,
                  },
                },
              };
            case Result.LONG.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  ta: {
                    ...state.practice.ta,
                    long: state.practice.ta.long + 1,
                  },
                },
              };
          }
        // RIGHT WING:
        case Position.RW:
          switch (action.shot.result) {
            case Result.BANK.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rw: {
                    ...state.practice.rw,
                    bank: state.practice.rw.bank + 1,
                  },
                },
              };
            case Result.SCORE.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rw: {
                    ...state.practice.rw,
                    score: state.practice.rw.score + 1,
                  },
                },
              };
            case Result.LEFT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rw: {
                    ...state.practice.rw,
                    short: state.practice.rw.short + 1,
                  },
                },
              };
            case Result.RIGHT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rw: {
                    ...state.practice.rw,
                    lerw: state.practice.rw.lerw + 1,
                  },
                },
              };
            case Result.RIGHT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rw: {
                    ...state.practice.rw,
                    right: state.practice.rw.right + 1,
                  },
                },
              };
            case Result.LONG.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rw: {
                    ...state.practice.rw,
                    long: state.practice.rw.long + 1,
                  },
                },
              };
          }
        // RIGHT CORNER:
        case Position.RC:
          switch (action.shot.result) {
            case Result.BANK.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rc: {
                    ...state.practice.rc,
                    bank: state.practice.rc.bank + 1,
                  },
                },
              };
            case Result.SCORE.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rc: {
                    ...state.practice.rc,
                    score: state.practice.rc.score + 1,
                  },
                },
              };
            case Result.LEFT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rc: {
                    ...state.practice.rc,
                    short: state.practice.rc.short + 1,
                  },
                },
              };
            case Result.RIGHT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rc: {
                    ...state.practice.rc,
                    lerw: state.practice.rc.lerw + 1,
                  },
                },
              };
            case Result.RIGHT.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rc: {
                    ...state.practice.rc,
                    right: state.practice.rc.right + 1,
                  },
                },
              };
            case Result.LONG.value:
              return {
                ...state,
                practice: {
                  ...state.practice,
                  rc: {
                    ...state.practice.rc,
                    long: state.practice.rc.long + 1,
                  },
                },
              };
          }
      }
    default:
      return state;
  }
};
