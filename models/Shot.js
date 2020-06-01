import { Position, Result, Points } from '../constants/ShotParams';

class Shot {
  constructor(position, result) {
    this.position = position;
    this.result = result;
  }

//   get points() {
//     if (this.result === Result.SCORE || this.result === Result.BANK) {
//       return this.range
//     } else {
//       return Points.NONE;
//     }
//   }
}

export default Shot;
