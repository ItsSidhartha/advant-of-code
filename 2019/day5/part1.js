const dbg = (x) => {
  console.log(x);
  return x;
};

const add = (a, b, output) => {
  memory[output] = (parseInt(memory[a]) + parseInt(memory[b])).toString();
};
const mul = (a, b, output) => {
  memory[output] = (parseInt(memory[a]) * parseInt(memory[b])).toString();
};
const store = (output) => {
  memory[output] = prompt("enter input");
};
const print = (input) => {
  console.log(memory[input]);
};

const JT = (indicator, value, _, pointer) =>
  memory[indicator] !== "0" ? parseInt(memory[value]) - pointer : 3;
const JF = (indicator, value, _, pointer) =>
  memory[indicator] !== "0" ? 3 : parseInt(memory[value]) - pointer;


const isLessThan = (a, b, output) =>
  memory[output] = memory[a] < memory[b] ? "1" : "0";
const isEqual = (a, b, output) =>
  memory[output] = memory[a] === memory[b] ? "1" : "0";

const operations = {
  "01": add,
  "02": mul,
  "03": store,
  "04": print,
  "05": JT,
  "06": JF,
  "07": isLessThan,
  "08": isEqual,
  };

const increments = {
  "01": 4,
  "02": 4,
  "03": 2,
  "04": 2,
  "07": 4,
  "08": 4,
};

const addressInc = {
  "01": [1, 2, 3],
  "02": [1, 2, 3],
  "03": [1],
  "04": [1],
  "05": [1, 2],
  "06": [1, 2],
  "07": [1, 2, 3],
  "08": [1, 2, 3],
  "99": [0],
};

const executeInstruction = (pointer) => {
  const instruction = memory[pointer].padStart(5, "0");
  const operation = instruction.slice(-2);
  const arg1 = instruction.at(-3) === "1"
    ? pointer + addressInc[operation][0]
    : memory[pointer + addressInc[operation][0]];
  const arg2 = instruction.at(-4) === "1"
    ? pointer + addressInc[operation][1]
    : memory[pointer + addressInc[operation][1]];
  const arg3 = instruction.at(-5) === "1"
    ? pointer + addressInc[operation][2]
    : memory[pointer + addressInc[operation][2]];

  // let outputAddress = memory[pointer + addressInc[operation][0]];
  // if (operation === "04" && instruction.at(-3) === "1") {
  //   outputAddress = pointer + addressInc[operation][0];
  // }

  // if (operation === "05" || operation === "06" && instruction.at(-3) === "1") {
  //   outputAddress = pointer + addressInc[operation][0];
  // }

  // const input1Address = instruction.at(-3) === "1"
  //   ? pointer + addressInc[operation][1]
  //   : memory[pointer + addressInc[operation][1]];
  // const input2Address = instruction.at(-4) === "1"
  //   ? pointer + addressInc[operation][2]
  //   : memory[pointer + addressInc[operation][2]];

  const jumpIncrement = operations[operation](
    arg1,
    arg2,
    arg3,
    pointer,
  );

  if (operation === "05" || operation === "06") return jumpIncrement;

  return increments[operation];
};

const intComputer = () => {
  let pointer = 0;
  while (memory[pointer] !== '99' && pointer < memory.length - 1) {
    const inc = executeInstruction(pointer);
    pointer = pointer + inc;
  }

  return memory[0];
};

// const memory = Deno.readTextFileSync("input.txt").split(",");
// const memory =
//   `3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,3,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99`
//     .split(",");
// const memory = "11107,2,3,5,99".split(",");

// intComputer();
