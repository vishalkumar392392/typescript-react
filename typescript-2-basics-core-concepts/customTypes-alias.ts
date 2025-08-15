type AddFn = (a: number, b: number) => number;

function add(a: number, b: number): number {
  return a + b;
}

function calculate(a: number, b: number, calc: AddFn) {
  return calc(a, b);
}

calculate(2, 3, add);

type User = {
  name: string;
  age: number;
  isMarried?: boolean;
};
let users: User = {
  name: "John",
  age: 30,
  isMarried: true,
};
