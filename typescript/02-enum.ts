enum Quality { // We define an enum (Quality)
    high,
    middle,
    low
};

let myQuality: Quality; // The variable myQuality can have just Quality values

myQuality = Quality.middle;
myQuality = Quality.low;

console.log('Quality.low', Quality.low); // It's interesting to see what happens with console.log

// We can define the content of enum values

enum NumberSign {
    Positive = 1,
    Negative = -1,
    Null = 0
}

let sign: NumberSign;

sign = 1; // The equivalent of NumberSign.Positive
sign = NumberSign.Positive;

enum TrafficLight {
    Red = 'red',
    Green = 'green',
    Yellow = 'yellow'
}

let nextTrafficLight: TrafficLight;
nextTrafficLight = TrafficLight.Red;

// We can compare the variable with TrafficLight type with other TrafficLight values
function isTrafficLightGreen(tl: TrafficLight) {
    return tl === TrafficLight.Green;
}

