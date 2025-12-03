const add = (a, b) => a + b;
const mul = (a, b) => a * b;

const instructions = {
  1: add,
  2: mul,
};

const executeInstruction = (memory, pointer) => {
  const outputAddress = memory[pointer + 3];
  const input1Address = memory[pointer + 1];
  const input2Address = memory[pointer + 2];
  memory[outputAddress] = instructions[memory[pointer]](
    memory[input1Address],
    memory[input2Address],
  );
  return memory;
};

const intComputer = (memory) => {
  let pointer = 0;
  while (memory[pointer] !== 99 && pointer < memory.length) {
    executeInstruction(memory, pointer);
    pointer = pointer + 4;
  }
  return memory[0];
};

export const main = (noun, verb) => {
  const memory = Deno.readTextFileSync("input.txt")
    .split(",")
    .map((x) => parseInt(x));

  memory[1] = noun;
  memory[2] = verb;

  return intComputer(memory);
};