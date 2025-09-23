interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function filterUser(users: User[]) {
  let ans = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
      ans.push(users[i]);
    }
  }

  return ans;
}

const filteredUsers = filterUser([
  {
    firstName: "Tanishi",
    lastName: "Janweja",
    age: 71,
  },
  {
    firstName: "Tanishi",
    lastName: "Janweja",
    age: 1,
  },{
    firstName: "Tanishi",
    lastName: "Janweja",
    age: 51,
  },
]);

console.log(filteredUsers);
