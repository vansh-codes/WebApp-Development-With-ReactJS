// reduce method is used to reduce the array to a single value
// 2 arguments: accumulator and current value
// accumulator is the value that is returned by the function and is passed to the next iteration 
// arr.reduce(function(acc, val){}, initialValue);
// initialValue is optional, default 0

var arr = [10,20,30];
var sum = arr.reduce((acc, val)=>{
    return acc+val;
},0); 
console.log(sum);


// to flaten 2D matrix
var mul = [[1,2,3], [4,5,6]];
var flat = mul.reduce((acc, val)=>{
    return acc.concat(val);
},[])
console.log(flat);

// to remove duplicates
var a = [10,30,10,20,30,40,20,50];
var unique = a.reduce((acc, val)=>{
    if(!acc.includes(val)){
        acc.push(val);
    }
    return acc;
},[]);
console.log(unique);

// to sum from an object array
let obj = [{n: 2}, {n: 3}, {n: 4}];
let sum1 = obj.reduce((acc, val)=>{
    return acc+val.n;
},0);

console.log(sum1);