export {};

let myNumber: number; // we can declare a variable of type number
// if we try to assign myNumber=true (not numeric) ts will throw an error

let myString: string;
let myBoolean: boolean;
// The same with other native types (string and boolean)

let myVariable: any; // any is a generic type
// myVariable can have any type of value
// (numeric, object, array, string, boolean...)

let myOtherVariable: unknown;
// TypeScript 3.0 introduces a new type: unknown.
// unknown is the type-safe counterpart of any. Anything is assignable to unknown,
// but unknown isn’t assignable to anything but itself and any without a type assertion
// or a control flow based narrowing.Likewise, no operations are permitted on an unknown
// without first asserting or narrowing to a more specific type.

// If during the declaration we don't define a type but we assign a value
// ts will automatically assign that type to the variable:
let name = "name"; // value is a string => type is string
// name = true; => ts throws an error

let lastName;
// If the value is assigned AFTER the declaration, ts will not associate that type to the variable
lastName = "Dow";
lastName = 12; // ts will not complain
