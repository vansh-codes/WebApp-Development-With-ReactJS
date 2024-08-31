
var result = (n) => {
    if(n==0 || n==1) return 1;
    return n*result(n-1);
}
console.log(result(5));
// console.log(this)

var obj = {
    name: "Vansh",
    greet: function(){
        setTimeout(()=>{console.log("hello ", this.name)}, 1000);
    }
}

console.log(obj);
obj.greet();    

class Student{
    constructor(name){
        this.name = name;
        console.log(this.name);
    }
    
    display(){
        console.log(this.name);
    }
}

var obj = new Student('Vansh')
obj.display();

function abc(){
    class Parent{
        #name
        constructor(name){
            this.#name = name;
            console.log(this.#name);
        }
    }
    return Parent;
}