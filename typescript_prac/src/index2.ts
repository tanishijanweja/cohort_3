// type User = {
//   id: string;
//   username: string;
// };
// type Users = {
//   [key: string]: User;
// };

// const users: Users = {
//   "asd@asd": {
//     id: "asd@asd",
//     username: "tan",
//   },
//   "asdf@asdf": {
//     id: "asdf@asdf",
//     username: "asd",
//   },
// };

type Users = Record<string, { age: number; name: string }>;

const users: Users = {
  "asd@asd": { age: 21, name: "asd" },
  "asdf@asdf": { age: 44, name: "asdf" },
};

//record and maps
