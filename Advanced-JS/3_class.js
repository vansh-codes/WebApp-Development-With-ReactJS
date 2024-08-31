function greet(){
    class greets{
        #name
        constructor(name){
            this.#name = name;
        }
        display(){
            console.log(this.#name);
        }
    }
    
    class greetts extends greets{
        constructor(name, place){
            super(name);
            this.place = place;
        }
        display(){
            super.display();
            console.log(this.place);
        }
    }
    return greetts;
}

var obj1 = greet();
var obj2 = new obj1("Vansh","Bhopal");
obj2.display();


// *TASK 1
function veh(){
    class Vehicle{
        #make;      // # used to make variables private inside the class
        #model;
        constructor(make, model){
            this.#make = make;
            this.#model = model;
        }
        getDetails(){
            console.log(`Vehicle: ${this.#make} and ${this.#model}`);
        }

        static compareVehicles(vehicle1, vehicle2){
            return vehicle1.#make === vehicle2.#make && vehicle1.#model === vehicle2.#model;
        }
    }

    class Car extends Vehicle{
        constructor(make, model, year, mileage){
            super(make, model);
            this.year = year;
            this.mileage = mileage;
        }
        drive(mileageInc){
            this.mileage += mileageInc;
            console.log("New mileage: ",this.mileage);
        }
        getDetails(){
            super.getDetails();
            console.log("Year: ", this.year);
            console.log("Mileage: ", this.mileage);
        }
    }
    return Car;
}

var obj3 = veh();
var obj4 = new obj3("New","TVS",2024,65);
obj4.getDetails();

var obj5 = new obj3("New", "TVS", 2024, 65);
console.log(obj3.compareVehicles(obj4, obj5));

obj4.drive(15);
obj4.getDetails();