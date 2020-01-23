function fiboEvenSum(n) {
  // You can do it!
  const sum = fibo(n).reduce(
    (acc, currentNum) => (currentNum % 2 === 0 ? acc + currentNum : acc),
    0
  );
  return sum;
}

const fibo = n => {
  let arr = [1, 2];
  let idx = 1;
  while (++idx < n) arr[idx] = arr[idx - 1] + arr[idx - 2];
  return arr;
};
console.log(fiboEvenSum(10));
