let arr1 = [
    {name: "Vansh", age: 21, hours: 12, skills: "Leadership"},
    {name: "Yash", age: 22, hours: 20, skills: "First Aid"},
    {name: "Raj", age: 23, hours: 21, skills: "Communication"},
    {name: "Ramesh", age: 64, hours: 20, skills: "Leadership"},
];

let arr2 = [
    {name: "Shashank", age: 21, hours: 19, skills: "Leadership"},
    {name: "Tapas", age: 62, hours: 9, skills: "First Aid"},
    {name: "Raju", age: 23, hours: 23, skills: "Communication"},
    {name: "Mahesh", age: 61, hours: 20, skills: "Leadership"},
];

let merged = [...arr1, ...arr2];
console.log("1. Merged objects: ", merged);

let filtered = merged.filter((item) => item.hours < 20);
console.log("2. Filtered objects: ", filtered);

let incrementRemainingVolunteersHours = merged.map((item) => {
    if (item.hours >= 20) {
        item.hours += 5;
    }
    return item;
});
console.log("3. Incremented remaining volunteers hours: ", incrementRemainingVolunteersHours);

let skillFirstAid = merged.find((item) => item.skills === "First Aid");
console.log("4. Volunteer with skill First Aid: ", skillFirstAid);

let seniorVolunteers = merged.filter((item) => item.age > 60);
console.log("5. Senior volunteers: ", seniorVolunteers);