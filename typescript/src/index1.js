var user = {
    name: "Tanishi",
    age: 5,
    address: {
        city: "delhi",
        country: "India",
        pincode: 110078,
    },
};
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
var ans = isLegal(user);
if (ans) {
    console.log("Legal");
}
else {
    console.log("Illegal");
}
