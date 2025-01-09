// sum.test.js
import { expect, test } from 'vitest';
import { addArray, sum } from '../../helpers/sum';
import { describe } from 'node:test';

describe('sum dunction is working done', () => {
  test('adds 1 + 2 to equal 3', () => {
    //preparacion
    const a = 1;
    const b = 2;
    //estimulo
    const result = sum(a, b);

    //comportamiento esperado
    expect(result).toBe(a + b);
  });
});

describe('addArray function is working done', () => {
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
});
