//readonly
type User = {
  name: string;
  age: number;
};

const user: Readonly<User> = {
  name: "john",
  age: 21,
};

// user.name = "ssi";
