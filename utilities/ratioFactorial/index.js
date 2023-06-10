const factorialOfTwoNumbers = require("../factorial/index");
const ratioOfNumber = require("../ratio/index");

function ratioAndFactorial(num1, num2, num3) {
  const ratio = ratioOfNumber(num1, num2);
  const factorial = factorialOfTwoNumbers(num3);

  return { ratio, factorial };
}

module.exports = ratioAndFactorial;
