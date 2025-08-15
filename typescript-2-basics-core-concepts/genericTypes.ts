type Role = "dev" | "test" | "devops";

let teammates: Array<Role>;

teammates = ["dev"];

//Custom Generics
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {
    this.storage.push(user);
  },
};

textStorage.add("vishal");
