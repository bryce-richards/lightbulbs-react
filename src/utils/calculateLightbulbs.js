export default (lightbulbs, people) => {
  let i = 0,
    lightFlips = 0,
    dividend = 0,
    divisor = 0,
    quotient = 0,
    switchedOn = [];

  for (i = 1; i <= Math.sqrt(Math.min(lightbulbs, people)); i++) {
    switchedOn.push(i * i);
  }

  for (dividend = people + 1; dividend <= lightbulbs; dividend++) {
    lightFlips = 0;

    for (divisor = 1; divisor <= Math.sqrt(dividend); divisor++) {
      if (dividend % divisor === 0) {
        quotient = dividend / divisor;

        if (quotient <= people) {
          lightFlips++;
        }

        if (quotient !== divisor && divisor <= people) {
          lightFlips++;
        }
      }
    }

    if (lightFlips % 2 !== 0) {
      switchedOn.push(dividend);
    }
  }

  return switchedOn;
};
