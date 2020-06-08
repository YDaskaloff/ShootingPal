export const getSuccessRate = (totalScore, totalMisses) => {
  let success = 0;

  success +=
        Math.round((totalScore / (totalMisses + totalScore)) * 100 * 100) / 100;

  return success;
}