const students = [
    {name:"Alice",grades:[50,60,70]},
    {name:"Bob",grades:[30,20,5]},
    {name:"Alice",grades:[90,85,95]},
]

let statuss = {
        "failed":[],
        "passed":[]

}

//declaration function
function result(){
    for(let elem of students){
        sum=0
        for(let i of elem.grades){
            sum+=i
        }
        avg = sum/(elem.grades.length);
        if(avg<40){
            statuss.failed.push(elem.name)
        }
        else{
            statuss.passed.push(elem.name)
        }
    }
}
result();
console.log(statuss);

//anonymous function
(function(){
    console.log("Called");
})()

//expression function
let exp = function(){
    console.log("Expression called")
}
exp();

//arrow function
let fun = (a,b) => a+b
console.log(fun(4,5))

//callback function
let fun1 = function(){
    console.log("Fun1 done!");
}
function foo(a, callback){
    console.log(a)
    //joh b kaam hai sab pura khtm krke
    callback()
}

foo(1,fun1);

let random = (a) =>{
    console.log('random '+a)
}

function random2(a, callback){
    a=a+5;
    callback(a);
    console.log('last')
}

random2(10,random);

setTimeout(()=>{console.log('hello')},10000);
setInterval(()=>{console.log('hi')},3000)