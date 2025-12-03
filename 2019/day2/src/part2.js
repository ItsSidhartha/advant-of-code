import { main } from "./part1.js";

const checkAll = () => {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (main(i, j) === 19690720) return [i,j]
    }
  }
};

console.log(checkAll());
