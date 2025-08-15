function add(a: number, b: number): number {
  return a + b;
}

function calculate(
  a: number,
  b: number,
  calc: (a: number, b: number) => number
) {
  return calc(a, b);
}

calculate(2, 3, add);
