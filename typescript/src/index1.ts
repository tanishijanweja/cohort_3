interface Address {
  city: string;
  country: string;
  pincode: number;
  houseNumber?: number;
}

interface User {
  name: string;
  age: number;
  address: Address;
}

interface Office {
  address: Address;
}

let user: User = {
  name: "Tanishi",
  age: 5,
  address: {
    city: "delhi",
    country: "India",
    pincode: 110078,
  },
};

function isLegal(user: User): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

const ans = isLegal(user);
if (ans) {
  console.log("Legal");
} else {
  console.log("Illegal");
}
