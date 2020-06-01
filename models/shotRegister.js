class ShotRegister {
  constructor(score, left, right, long, short) {
    this.score = score;
    this.left = left;
    this.right = right;
    this.long = long;
    this.short = short;
  }

  get totalMisses() {
    const misses = +this.left + +this.right + +this.long + +this.short;
    return misses;
  }
}

export default ShotRegister;
