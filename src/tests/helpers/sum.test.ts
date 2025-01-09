// sum.test.js
import { expect, test } from 'vitest';
import { addArray, sum } from '../../helpers/sum';

test('adds 1 + 2 to equal 3', () => {
  //preparacion
  const a = 1;
  const b = 2;
  //estimulo
  const result = sum(a, b);

  //comportamiento esperado
  expect(result).toBe(a + b);
});

test('suma los valores del arreglo correctamente', () => {
  //preparacion
  const a = [1, 2, 3, 4, 5];
  //estimulo
  const result = addArray(a);

  //comportamiento esperado
  expect(result).toBe(15);
});

test('should return 0 if the array is empty', () => {
  //preparacion
  const arr: [] = [];
  //estimulo
  const result = addArray(arr);

  //comportamiento esperado
  expect(result).toBe(0);
});
