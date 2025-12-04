const distance = (point1, point2) =>
  Math.abs(point1[1] - point2[1]) + Math.abs(point1[0] - point2[0]);

function isArray(target) {
  return typeof target === "object";
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

function right(instruction, points) {
  for (let index = 0; index < parseInt(instruction.slice(1)); index++) {
    const [x, y] = points[points.length - 1];
    points.push([x + 1, y]);
  }
}

function left(instruction, points) {
  for (let index = 0; index < parseInt(instruction.slice(1)); index++) {
    const [x, y] = points[points.length - 1];
    points.push([x - 1, y]);
  }
}

function up(instruction, points) {
  for (let index = 0; index < parseInt(instruction.slice(1)); index++) {
    const [x, y] = points[points.length - 1];
    points.push([x, y + 1]);
  }
}

function down(instruction, points) {
  for (let index = 0; index < parseInt(instruction.slice(1)); index++) {
    const [x, y] = points[points.length - 1];
    points.push([x, y - 1]);
  }
}

const path = (instructions) => {
  const points = [[0, 0]];
  for (const instruction of instructions) {
    if (instruction[0] === "R") {
      right(instruction, points);
    }
    if (instruction[0] === "L") {
      left(instruction, points);
    }
    if (instruction[0] === "U") {
      up(instruction, points);
    }
    if (instruction[0] === "D") {
      down(instruction, points);
    }
  }

  return points;
};

const intersect = (array1, array2) => {
  const elements = [];
  for (const element of array1) {
    for (const element2 of array2) {
      if (element[0] === element2[0] && element[1] === element2[1]) {
        elements.push(element);
      }
    }
  }
  return elements;
};

// const allInstructions = Deno.readTextFileSync("input.txt").split("\n");

export const allIntersections = (allInstructions) => {
  const wire1 = path(allInstructions[0].split(","));
  const wire2 = path(allInstructions[1].split(","));
  const intersections = intersect(wire1, wire2);
  intersections.shift();
  return {intersections,wire1,wire2};
};

// const wires = () => {
//   const intersections = allIntersections();
//   let minDistance = Infinity;
//   for (const intersection of intersections) {
//     minDistance = Math.min(distance([0, 0], intersection), minDistance);
//   }

//   return minDistance;
// };

// const minDistance = wires();
// console.log(minDistance);
