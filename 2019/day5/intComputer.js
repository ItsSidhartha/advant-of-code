const add = (a, b, outputAddress) => {
  memory[outputAddress] = memory[a] + memory[b];
};

const mul = (a, b, outputAddress) => {
  memory[outputAddress] = memory[a] * memory[b];
};

const store = (address) => {
  memory[address] = +prompt("Enter ID");
};

const print = (address) => {
  console.log(memory[address]);
};

const jumpIfTrue = (indicater, jumpAddress) => {
  pointer = !memory[indicater] ? pointer + 3 : memory[jumpAddress];
};

const jumpIfFalse = (indicater, jumpAddress) => {
  pointer = memory[indicater] ? pointer + 3 : memory[jumpAddress];
};

const isLessThan = (value1, value2, outputAddress) => {
  memory[outputAddress] = memory[value1] < memory[value2] ? 1 : 0;
};
const isEqual = (value1, value2, outputAddress) => {
  memory[outputAddress] = memory[value1] === memory[value2] ? 1 : 0;
};

const operations = {
  1: { operation: add, inc: 4 },
  2: { operation: mul, inc: 4 },
  3: { operation: store, inc: 2 },
  4: { operation: print, inc: 2 },
  5: { operation: jumpIfTrue, inc: 0 },
  6: { operation: jumpIfFalse, inc: 0 },
  7: { operation: isLessThan, inc: 4 },
  8: { operation: isEqual, inc: 4 },
};

const executeInstruction = () => {
  const instruction = memory[pointer].toString().padStart(5, "0");
  const operation = parseInt(instruction.at(-1));
  const modes = [...instruction.slice(0, 3)].map((x) => +x).reverse();
  const arg1 = modes[0] ? pointer + 1 : memory[pointer + 1];
  const arg2 = modes[1] ? pointer + 2 : memory[pointer + 2];
  const arg3 = modes[2] ? pointer + 3 : memory[pointer + 3];

  operations[operation].operation(arg1, arg2, arg3);
  pointer = pointer + operations[operation].inc;
};

const executeInstructions = () => {
  while (memory[pointer] !== 99) {
    executeInstruction();
  }
};

const memory = Deno.readTextFileSync("input.txt").split(",").map((x) => +x);

let pointer = 0;

executeInstructions();
