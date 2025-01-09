// sum.js
export function sum(a: number, b: number) {
  return a + b;
}
// sum.test.js

export const addArray = (arr: number[]): number => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};
