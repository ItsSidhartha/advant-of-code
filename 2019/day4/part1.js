const start = 271973;
const end = 785961;
const actualStart = (277777 + "").split("").map((x) => +x);
const actualEnd = (779999 + "").split("").map((x) => +x);

const areEqual = (a, b) => {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
    a[4] === b[4] && a[5] === b[5];
};

const atLeastOneDouble = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) return true;
    }
  }
  return false;
};

let count = 0;

while (!areEqual(actualStart, actualEnd)) {
  console.log(actualStart);

  if (atLeastOneDouble(actualStart)) count++;

  if (actualStart[5] < 9) actualStart[5]++;
  else if (actualStart[4] < 9) {
    actualStart[4]++;
    actualStart[5] = actualStart[4];
  } else if (actualStart[3] < 9) {
    actualStart[3]++;
    actualStart[5] = actualStart[3];
    actualStart[4] = actualStart[3];
  } else if (actualStart[2] < 9) {
    actualStart[2]++;
    actualStart[5] = actualStart[2];
    actualStart[4] = actualStart[2];
    actualStart[3] = actualStart[2];
  } else if (actualStart[1] < 9) {
    actualStart[1]++;
    actualStart[5] = actualStart[1];
    actualStart[4] = actualStart[1];
    actualStart[3] = actualStart[1];
    actualStart[2] = actualStart[1];
  } else if (actualStart[0] < 9) {
    actualStart[0]++;
    actualStart[5] = actualStart[0];
    actualStart[4] = actualStart[0];
    actualStart[3] = actualStart[0];
    actualStart[2] = actualStart[0];
    actualStart[1] = actualStart[0];
  }
}

console.log(count);
