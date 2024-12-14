// In some cases we need to define types based on other types

type storeString = {
  getter: () => string;
  setter: (param: string) => void;
};

type storeNumber = {
  getter: () => number;
  setter: (param: number) => void;
};

// We can proceed with multiple other types like we've done with string and number
// In some cases this type of types are complex so it's difficult to maintain it

// Fist possible solution to keep it generic and easy to centralise
type storeAny = {
  getter: () => any;
  setter: (param: any) => void;
};
// Problem: no type check

// Better solution, we use generics:
type store<InternalType> = {
  getter: () => InternalType;
  setter: (param: InternalType) => void;
};

let nameStore: store<string>;
// We are sure that we can set and get just string
let dateStroe: store<Date>;
// We are sure that we can set and get just Date

// We can use generics to define functions as well
function lastElementOfArray<ElementType>(elements: ElementType[]): ElementType {
  const lastIndex = elements.length - 1;
  return elements[lastIndex];
}

const lastNumber = lastElementOfArray<number>([1, 3, 8, 12]);

// Typescript is smart enough to understand the generic type (type inference)
// if we don't pass it but it is uniquely determined by the params we pass
// Example:

// We are passing an array of string
// Ts know that the array must be of type defined in ElementType
// So ElementType will be a string
// Ts also knows that the return type is ElementType so it's a string
// lastString will be of type string
const lastString = lastElementOfArray(["hello", "world", "again", "today"]);

// We can have as many generics as we need
type Converter<TypeFrom, TypeTo> = {
  encoder: (source: TypeFrom) => TypeTo;

  // Equivalent to
  // decoder: (coded: TypeTo) => TypeFrom;
  decoder(coded: TypeTo): TypeFrom;
};

const myConverter: Converter<string, number> = {
  encoder: (source) => {
    return source.length;
  },

  // Equivalent to
  // decoder: (coded) => `${coded}`;
  decoder(coded) {
    return `${coded}`;
  },
};
