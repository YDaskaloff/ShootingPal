import moment from 'moment';

class NewPractice {
  constructor(
    date,
    cr,
    lb,
    le,
    ft,
    re,
    rb,
    lc,
    lw,
    ta,
    rw,
    rc,
    totalScore,
    totalMisses,
    successRate
  ) {
    this.date = date;
    this.cr = cr;
    this.lb = lb;
    this.le = le;
    this.ft = ft;
    this.re = re;
    this.rb = rb;
    this.lc = lc;
    this.lw = lw;
    this.ta = ta;
    this.rw = rw;
    this.rc = rc;
    this.totalScore = totalScore;
    this.totalMisses = totalMisses;
    this.successRate = successRate;
  }

  get readableDate() {
    return moment(this.date).format('MMMM Do YYYY, hh:mm');
  }
}

export default NewPractice;
