// In some cases we need to force the types of a variable
// We can do it with the "as" keyword

type Computer = {
  name: string;
  memory: number;
  processor: string;
};

function showComputerInfo(computer: Computer) {}

// The object is not completely a Computer
// By using the "as Computer" syntax we are forcing the method to consider it a Computer value
// To be used carefully as we are forcing ts to act out of its scope
showComputerInfo({ name: "my-computer", memory: 124 } as Computer);
