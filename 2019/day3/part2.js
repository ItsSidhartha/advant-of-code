import { allIntersections } from "./part1.js";

const allInstructions = Deno.readTextFileSync("input.txt").split("\n");

const steps = (path, point) => {
  for (const index in path) {
    if (path[index][0] === point[0] && path[index][1] === point[1]) {
      return +index;
    }
  }
};

const main = () => {
  const { intersections, wire1, wire2 } = allIntersections(allInstructions);
  let minSteps = Infinity;
  for (const intersection of intersections) {
    const steps1 = steps(wire1, intersection);
    const steps2 = steps(wire2, intersection);

    minSteps = Math.min(minSteps, steps1 + steps2);
  }

  return minSteps;
};

console.log(main());
