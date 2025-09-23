var Manager = /** @class */ (function () {
    function Manager(name, age) {
        this.name = name;
        this.age = age;
    }
    return Manager;
}());
var user = new Manager("John", 30);
console.log(user.age);
