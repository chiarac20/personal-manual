// When we define a function we should define the type of the params and the type of return:

function getMax(a: number, b: number, c: number): number {
  // If we try to return a value that is not a number ts will complain
  return Math.max(a, b, c);
}

// Ts will know that result is a number because we defined the return in function declaration
const result = getMax(1, 2, 3);

// We can specify that the function doesn't return anything with void:
function showError(error: string): void {
  // If we try to return something ts will complain
  console.error(error);
}

// We can define the functions with the simple keyword "Function":

let myFunction: Function;

myFunction = () => {}; // OK
myFunction = (aa: number) => aa * 2; // OK
myFunction = (message: string) => message.toUpperCase(); // OK

// We can be more specific by indicating the number and type of params and the type of return
let mySpecificFunction: (name: string, id: number) => RegExp;

// Not valid as it has no params and neither return
// mySpecificFunction = () => console.log('hello')

// Not valid as there is an extra input param (the boolean one)
// mySpecificFunction = (name: string, id: number, condition: boolean) => /regex/;

// Not valid as the first param is not a string
// mySpecificFunction = (name: number, id: number) => /regex/;

// Not valid as it doesn't return a RegExp
// mySpecificFunction = (name: string, id: number) => 12;

// Valid, the params names don't need to match the ones in declaration:
mySpecificFunction = (value: string, age: number) => new RegExp(value);

// We can create an alias for function types as well:
type StringGetter = (input: string) => void;

// We can use union or intersection definitions for params and return:
type UnionFnType = (input: string | Date) => boolean | string;

// Example:
let unionFn: UnionFnType;
unionFn = (param) => {
  if (typeof param === "string") {
    return true;
  }
  return param.toLocaleString();
};

const throwError: () => never = () => {
  throw Error("An error occurred");
};
//In a return type, never is used when the function throws an exception
