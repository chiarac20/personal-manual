// We can define array in typescript:

let friends: string[]; // it is an array of string
let monthIncome: number[]; // array of number
let appointments: Date[]; // array of Date

type Device  = {
    name: string;
};

let devices: Device[]; // array of object that match the Device type
// Alternatively we can use the notation
// Array<string> = string[]
// Array<Date> = Date[]
// Array<Device> = Device[]
// ....

// We can define array with a fixed number and type of elements
// They are called tuples
let carModel: [string, string, number];
carModel = ['Lancia', 'Y', 123];
// carModel can be only an array with length 3
// First and second elements must be strings
// 3rd element must be a number

// In tuples we can defind a label for every element
let person: [name: string, surname: string, dob: Date ];
// The object person must be an array of 3 elements
// 1st and 2nd element must be string
// 3rd element must be a Date
// ts will show the "name", "surname" and "dob" labels on mouse over values

// We can assign tuples to types:
type Student = [fullName: string, id: string, dob: Date];

let student: Student;
student = ['John Dow', '123123123', new Date()]