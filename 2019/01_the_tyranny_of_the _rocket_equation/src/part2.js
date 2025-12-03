const fuelRequired = (mass) => {
  if (mass <= 0) return 0;
  const fuel = Math.max(Math.floor(mass / 3) - 2, 0);

  return fuel + fuelRequired(fuel);
};

const inputs = Deno.readTextFileSync("input.txt").split("\n").map((x) =>
  parseInt(x)
);

const totalFuelRequirement = inputs.reduce(
  (total, curr) => total + fuelRequired(curr),
  0,
);

console.log(totalFuelRequirement);
