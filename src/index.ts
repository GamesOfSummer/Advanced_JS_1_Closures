export function summation(n: number): number {
  const array = [...Array.from(Array(n).keys()), n];
  return array.reduce((a, b) => a + b, 0);
}
