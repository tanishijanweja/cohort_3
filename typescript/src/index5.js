function filterUser(users) {
    var ans = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].age > 18) {
            ans.push(users[i]);
        }
    }
    return ans;
}
var filteredUsers = filterUser([
    {
        firstName: "Tanishi",
        lastName: "Janweja",
        age: 71,
    },
    {
        firstName: "Tanishi",
        lastName: "Janweja",
        age: 1,
    }, {
        firstName: "Tanishi",
        lastName: "Janweja",
        age: 51,
    },
]);
console.log(filteredUsers);
