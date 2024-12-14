// We can define a type merging different types:

type User = {
    email: string,
    userName: string,
};

// The type Admin includes all the params of type User + the adminId
type Admin = User & {
    adminId: number,
};

type Customer = {
    customerId: number,
};

// The type SpecialCustomer includes all the params of type User + the params of type Customer
type SpecialCustomer = User & Customer;