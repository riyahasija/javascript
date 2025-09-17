let users = [
    { id: 1, name: "Alice", isActive: true},
    { id: 2, name: "Bob", isActive: false},
    { id: 3, name: "Charlie", isActive: true},
];

//to filter out isActive true users in a seperate array.
filtered=[];
for(let elem of users){
    if(elem.isActive){
        filtered.push(elem);
    }
}

console.log(filtered);

let values = {
    "1":"yellow",
    1:"red",
    2:"green"
}

console.log(values)
//it will only give you 2 keys because number 1 gets converted into string internally and overrides string 1.

let students = [
    { name: "Alice", average:60},
    { name: "Bob", average:30},
    { name: "Charlie", average:90},
]

StudentsFiltered = [];
for(let elem of students){
    if(elem.average<45){
        StudentsFiltered.push(elem);
    }
}

console.log(StudentsFiltered);

const studentData = [
    { name: "Alice", grades: [50,60,70]},
    { name: "Bob", grades:[30,20,40]},
    { name: "Charlie", grades:[30,85,95]},
]

sorted=[];

for (let elem of studentData){
    // console.log(elem.name);
    let sum = 0;
    let avg = 0;
    // let count = 0;
    for(let i of elem.grades){
        sum+=i
        // count++;
    }
    avg = sum/elem.grades.length;
    obj = {name:elem.name, average:avg}
    sorted.push(obj)
}

console.log(sorted)

let items = [
    {
        id: 1,
        name: "Laptop",
        price: 5000,
        quantity:1
    },

    {
        id: 2,
        name: "Headset",
        price: 2000,
        quantity:2
    },

    {
        id: 1,
        name: "Mouse",
        price: 800,
        quantity:3
    }
]

finalPrice=[]
for(let elem of items){
    price = elem.price*elem.quantity
    finalPrice.push(price);
}

console.log(finalPrice)
let sum=0
for(let elem of finalPrice){
    sum+= elem
}
console.log(sum)

let names = "Xyz";
console.log("My name is "+names)
console.log('My name is ${names}')
//template strings

//length is a property of a string not a function
console.log(names.length)

//access string indices
console.log(names[5])
console.log(names[2])

//functions of strings
console.log(names.toLowerCase())
console.log(names.toUpperCase())
let sentence = "hello my name is hello"
console.log(sentence.replace("hello","xyz"))
console.log(sentence.replaceAll("hello","xyz"))
//check whether string is present, if present true else false
console.log(sentence.includes("hello"))

let flag = 'true'
//any non-empty string results into a truthy value.
//empty string results in falsy values
if(flag){
    console.log("hello")
}
else{
    console.log("hi")
}

let flag2 = 1
//0 - falsy value
//any other value is truthy value
if(flag2){
    console.log("hello")
}
else{
    console.log("hi")
}

let numString = "1.5"
console.log(typeof numString)
//converting string into a number
console.log(Number(numString))
console.log(Number.parseInt(numString))//int
console.log(Number.parseFloat(numString))//float
console.log(+numString)// easier and common way

// write a code that groups students by their department

let student = [
    {name:"John",dept:"CSE"},
    {name:"Mary",dept:"ECE"},
    {name:"Peter",dept:"CSE"},
    {name:"Sara",dept:"EEE"},
]

for(let elem of student){
    
}
