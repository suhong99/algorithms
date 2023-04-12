function simpleArraySum(ar) {
  //   console.log(ar);
  const result = ar.reduce((acc, cur) => acc + cur, 0);
  //   console.log(result);
  return result;
}

simpleArraySum([1, 2, 3, 4]);
console.log(simpleArraySum([1, 2, 3, 4]));
