/*
 *
const billAmount = 47.53
const amountSent = 100.00
const coinDenominations = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 50.00, 100.00]



const optimalChange = (billAmount, amountSent, coinDenominations) => {

}

console.log(optimalChange(billAmount, amountSent, coinDenominations));
*/


// resolved

const billAmount = 47.53;
const amountSent = 100.0;
const coinDenominations = [
  0.01, 0.05, 0.1, 0.25, 1.0, 5.0, 10.0, 20.0, 50.0, 100.0,
];

const optimalChange = (billAmount, amountSent, coinDenominations) => {
  let dif = amountSent - billAmount;
  const sortedItems = coinDenominations.sort((a, b) => b - a);

  temp = { billAmount, amountSent, dif };
  const result = {};
  sortedItems.forEach((coin) => {
    const cociente = Math.floor(dif / coin);

    if (cociente > 0) {
      result[coin] = cociente;

      dif = (dif - coin * cociente).toFixed(2);
    }
    console.log({ dif, coin, cociente });
  });

  temp.resultCheck = Object.keys(result)
    .map((value) => parseFloat(value) * result[value])
    .reduce((partialSum, a) => partialSum + a, 0);
  console.log(temp);

  return result;
};

console.table(optimalChange(billAmount, amountSent, coinDenominations));
