// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Manager = {
//   name: string;
//   department: string;
// };

// type TeamLead = Employee & Manager;

// const teamLead: TeamLead = {
//   name: "harkirat",
//   startDate: new Date(),
//   department: "Software developer"
// };

// type StringOrNumber = string | number;

// function printId(id: StringOrNumber) {
//   console.log(`ID: ${id}`);
// }

// printId(101); // ID: 101
// printId("202"); // ID: 202

interface Admin {
  name: string;
  permissions: string;
}

interface User {
  name: string;
  age: number;
}

type UserOrAdmin = User | Admin;

function greet(user: UserOrAdmin) {
  console.log(user.name);
}
