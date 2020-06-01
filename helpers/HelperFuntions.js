import { Position, Result, Points } from '../constants/ShotParams';

export const getCountFor = (practice, curPosition, selectedPoints) => {
  let position;
  switch (curPosition) {
    case Position.CR:
      position = practice.closeRange;
      break;
    case Position.LB:
      position = practice.leftBlock;
      break;
    case Position.LE:
      position = practice.leftElbow;
      break;
    case Position.FT:
      position = practice.freeThrow;
      break;
    case Position.RE:
      position = practice.rightElbow;
      break;
    case Position.RB:
      position = practice.rightBlock;
      break;
    case Position.LC:
      position = practice.leftCorner;
      break;
    case Position.LW:
      position = practice.leftWing;
      break;
    case Position.TA:
      position = practice.topOfTheArc;
      break;
    case Position.RW:
      position = practice.rightWing;
      break;
    case Position.RC:
      position = practice.rightCorner;
      break;
    default:
      return;
  }

  if (position.length === 0) {
    return position.length;
  }

  const count = position.filter(
    (shot) =>
      shot.points === selectedPoints &&
      (shot.result === Result.SCORE || shot.result === Result.BANK)
  );

  return count.length;
};
