// We can define variable to have different type of values
// With union types, they are defined by pipe syntax
let variable: number | string | null | undefined;
variable = null; // OK
variable = 12; // OK
variable = 'hello world!'; // OK
variable = undefined; // OK
// variable = true // ERROR
// variable = [] // ERROR

// We can use union types even with custom types
type House = {
    address: string,
    doorNumber: number
};

type Apartment = {
    address: string,
    floor: number,
};

// We can assign to dwelling an object that matches with House or Apartment type
let dwelling: House | Apartment;

// We can create a custom type for it:
type Dwelling = House | Apartment;