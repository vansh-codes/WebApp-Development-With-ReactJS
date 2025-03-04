const data = [
    { name: "Alice", value: 10, age: 25, address: "123 St", city: "NY", dob: "1998-01-01", gender: "F", firstname: "Alice", lastname: "Smith", number: "12345", status: "Active", salary: 50000 },
    { name: "Bob", value: 15, age: 30, address: "456 St", city: "LA", dob: "1993-02-02", gender: "M", firstname: "Bob", lastname: "Johnson", number: "67890", status: "Inactive", salary: 60000 }
];

const extractedData = data.map(({ name, salary }) => ({ name, salary }));

console.log(extractedData);
