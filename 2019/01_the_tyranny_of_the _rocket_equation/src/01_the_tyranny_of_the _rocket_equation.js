export const requiredFuel = (mass) => Math.floor(mass / 3) - 2;
const inputs = Deno.readTextFileSync('input.txt').split('\n').map(x=>parseInt(x));
console.log(inputs.join('\n'));

const totalFuelRequireMent = inputs.reduce((total,curr) => total + requiredFuel(curr),0)

console.log(totalFuelRequireMent);

console.log(requiredFuel(12));

