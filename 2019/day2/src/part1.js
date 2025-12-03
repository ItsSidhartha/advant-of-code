const add = (a, b) => a + b;
const mul = (a, b) => a * b;

const instructions = {
  1: add,
  2: mul,
};

const executeInstruction = (memory, index) => {
  const outputLocation = memory[index + 3];
  const input1Location = memory[index + 1];
  const input2Location = memory[index + 2];
  memory[outputLocation] = instructions[memory[index]](
    memory[input1Location],
    memory[input2Location],
  );
  return memory;
};

const intComputer = (memory) => {
  let index = 0;
  while (memory[index] !== 99 && index < memory.length) {
    executeInstruction(memory, index);
    index = index + 4;
  }
  return memory[0];
};

const main = () => {
  const memory = Deno.readTextFileSync("input.txt")
    .split(",")
    .map((x) => parseInt(x));

  memory[1] = 12;
  memory[2] = 2;

  console.log(intComputer(memory));
};

main();
