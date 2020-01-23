const multiplesOf3and5 = number => {
  let multiplesOf3 = myfunc(3, number).reduce(
    (acc, currentVal) => (currentVal % 5 !== 0 ? acc + currentVal : acc),
    0
  );
  let multiplesOf5 = myfunc(5, number).reduce(
    (acc, currentVal) => acc + currentVal,
    0
  );

  return multiplesOf3 + multiplesOf5;
};

// caculating all the multiples of x that are less than number

const myfunc = (x, number) => {
  let arr = [];
  let i = 1;
  let newNum = x;
  while (newNum < number) {
    arr.push(newNum);
    i++;
    newNum = x * i;
  }

  return arr;
};

multiplesOf3and5(1000);
