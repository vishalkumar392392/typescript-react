function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

// const newUser = merge<{ name: string }, { email: string }>(
//   { name: "vishal" },
//   { email: "vishal@gmail.com" }
// );

const newUser = merge({ name: "vishal" }, { email: "vishal@gmail.com" });
