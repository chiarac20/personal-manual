// In typescript we can define types with constant params:
type Train = {
  trainCode: string;
  transportType: "train"; // Every object of type train must have transportType = 'train'
};

function getInfo(transport: Train) {
  console.log(transport);
}

const myTrain = {
  trainCode: "hello",
  transportType: "train",
};

// Ts will complain because in myTrain the transportType is a string,
// not the specific 'train' string
// getInfo(myTrain)
myTrain.transportType = "something else"; // OK as transportType is a string

const mySpecificTrain = {
  trainCode: "hello",
  transportType: "train" as const,
};

// Ts will not complain because we've defined transportType as constant
getInfo(mySpecificTrain);

// TS will complain as we've defined the transportType as a constant
// myTrain.transportType = ''
