export const requiredFuel = (mass) => Math.floor(mass / 3) - 2;
const inputs = Deno.readTextFileSync("input.txt").split("\n").map((x) =>
  parseInt(x)
);

const totalFuelRequireMent = inputs.reduce(
  (total, curr) => total + requiredFuel(curr),
  0,
);
