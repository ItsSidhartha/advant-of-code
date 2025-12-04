import { requiredFuel } from "../src/part1.js";
import {assertEquals} from 'jsr:@std/assert'

Deno.test('first test', () => {
  assertEquals(requiredFuel(12), 2)
})

Deno.test('first test', () => {
  assertEquals(requiredFuel(14), 2)
})

Deno.test('first test', () => {
  assertEquals(requiredFuel(1969), 654)
})

Deno.test('first test', () => {
  assertEquals(requiredFuel(100756), 33583)
})