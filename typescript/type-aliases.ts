type Person = {
  // We define a custom type Person
  firstName: string;
  lastName: string;
  dob: Date;
};

let me: Person; // me is a variable that contains just objects that can match the Person type

// in this case ts will complain because the object assigned to "me" does not include firstName, lastName and dob
// me = {}

// In this case ts will complain because the object me contains an attribute "otherParam" not included
// in type Person
// me = {firstName: 'John', lastName: 'Doh', dob: new Date(), otherParam: {}}

// In this case ts will complain because the attribute dob is not a Date
// me = {firstName: 'John', lastName: 'Doh', dob: '2020-01-01'}

// The value will completely match with Person type, so ts will not complain
me = {
  dob: new Date(),
  firstName: "John",
  lastName: "Doh",
};

type Car = {
  brand: string;
  owner: Person; // we can use custom type inside other types
  gpsBrand?: string; // The param gpsBrand is optional
};

let carWithGps: Car;
carWithGps = {
  brand: "Lancia",
  gpsBrand: "Nvidia",
  owner: me, // defined before
};

const carWithoutGps: Car = {
  // We don't add the param gpsBrand and ts will not complain
  brand: "Tesla",
  owner: {
    firstName: "Joe",
    lastName: "Brown",
    dob: new Date(),
  },
};
