const ops = ["5", "2", "C", "D", "+"];
/**
 * c = Invalidate the previous score, remove from result
 * D = Double the prev score and push it.
 * + = add prev two scores and push the final ans
 * default: Push the score to result
 *
 * {returns} Sum of records
 */

var calPoints = (ops) => {
  let record = [];

  const operate = (operand) => {
    switch (operand) {
      case "C": {
        record.pop();
        return;
      }

      case "D": {
        const prevScore = record[record.length - 1] * 2;
        operate(prevScore);
        return;
      }

      case "+": {
        const sum = record[record.length - 1] + record[record.length - 2];
        operate(sum);
        return;
      }
      default:
        const num = Number(operand);
        record.push(num);
        break;
    }
  };
  ops.forEach(operate);
  return record.reduce((sum, num) => sum + num);
};

module.exports = calPoints;
